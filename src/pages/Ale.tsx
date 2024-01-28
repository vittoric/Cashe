import Image from "next/image";

export default function Ale() {
  return (
    <>
	<div >
      <div className="flex pt-4 flex-col-reverse w-full max-w-[440rem] mt-8   gap-8">
        <div className="mx-3 text-xl text-center bg-green-200">
          <p className="font-bold text-center"> Karol Huertas</p>
          Frontend Web3, Community Manager, Developer lead
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 rounded-full flex-flex-col"
            src="/Ale.svg"
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
