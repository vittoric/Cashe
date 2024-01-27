import Image from "next/image";

export default function Vica() {
  return (
    <>
	<div className="bg-rose-800">
      <div className="flex pt-4 flex-col-reverse w-full max-w-[440rem] mt-8 bg-red-200 gap-8">
        <div className="mx-3 text-xl text-center bg-green-200">
          <p className="font-bold text-center"> Multimedia</p>
          Frontend Web3, Community Manager, Developer lead
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 rounded-full flex-flex-col"
            src="/logo.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
	  </div>
    </>
  );
}
