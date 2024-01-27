async function main() {
    const RentContract = await ethers.getContractFactory("RentContract");
    
    // Define los valores para los parámetros del constructor
    const rentalPrice = 10;
    const collateralAmount = 100;
    
    // Inicia el despliegue, devolviendo una promesa que resuelve a un objeto de contrato
    const rentContract = await RentContract.deploy(rentalPrice, collateralAmount);
    console.log("Contrato desplegado en la dirección:", rentContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
