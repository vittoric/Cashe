// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RentContract {
	address public owner;
	address public renter;
	uint256 public rentalPrice;
	uint256 public collateralAmount;
	bool public isRented;
	bool public isColateralized;
	//identificador único del producto) y el valor es la dirección del arrendatario.
	mapping(bytes32 => address) public rentedProducts;
	//posible events
	event ProductRented(address indexed owner, address indexed renter, uint256 price, uint256 collateral);
	event ColateralDeposited(address indexed renter, uint256 amount);
	event ProductReturned(address indexed renter);

	modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyRenter() {
        require(msg.sender == renter, "Only renter can call this function");
        _;
    }

    modifier notRented() {
        require(!isRented, "Product is already rented");
        _;
    }

    modifier notColateralized() {
        require(!isColateralized, "Colateral is already deposited");
        _;
    }

    constructor(uint256 _rentalPrice, uint256 _collateralAmount) {
        owner = msg.sender;
        rentalPrice = _rentalPrice;
        collateralAmount = _collateralAmount;
    }
	// Me aseguro de que el producto no esté alquilado y que no se haya depositado el colateral.
    function rentProduct() external notRented notColateralized payable {
        require(msg.value == rentalPrice, "Incorrect price");
        renter = msg.sender;
        isRented = true;

        emit ProductRented(owner, renter, rentalPrice, collateralAmount);
    }
	//Esta función permite al arrendatario depositar el colateral. Se asegura de que el
	//colateral no se haya depositado todavía y que el valor enviado sea igual a la cantidad de colateral.
	//Si es así, se marca el colateral como depositado y se emite un evento.
    function depositColateral() external onlyRenter notColateralized payable {
        require(msg.value == collateralAmount, "Incorrect collateral amount");
        isColateralized = true;

        emit ColateralDeposited(renter, collateralAmount);
    }
	//Esta función permite al arrendatario devolver el producto.
	//Verifica que el producto esté alquilado y que el colateral se haya depositado.
	//Transfiere el precio de alquiler al propietario, restablece el estado del contrato 
	//y emite un evento.
    function returnProduct() external onlyRenter {
        require(isRented, "Product is not rented");
        require(isColateralized, "Colateral is not deposited");

        // Transfer rental price to owner
        payable(owner).transfer(rentalPrice);

        // Transfer colateral to owner
        payable(owner).transfer(collateralAmount);

        // Reset contract state
        isRented = false;
        isColateralized = false;
        renter = address(0);

        emit ProductReturned(renter);
    }
}