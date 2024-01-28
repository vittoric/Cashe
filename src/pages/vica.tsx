import Image from "next/image";

export default function Vica() {
  return (
    <>
	<div >
      <div className="flex pt-4 flex-col-reverse w-full max-w-[440rem] mt-8   gap-8">
        <div className="mx-3 text-xl text-center ">
          <p className="font-bold text-center"> Victoria Codreanu</p>
          Frontend Web3, Product Manager, Developer
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 rounded-full flex-flex-col"
            src="/vica.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
	  </div>
    </>
  );
}
