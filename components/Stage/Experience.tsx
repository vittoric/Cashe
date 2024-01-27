import Image from "next/image";

export default function Experience() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
			<div className="mx-3 text-center">
				<p className="text-xl font-bold text-center"> MARKET </p>
				<p className="pb-4 "> Owners list items for sale with personalized prices and descriptions.</p>
				<p className="pb-4 ">Renters can securely connect digital wallets for crypto payments through wallet connect authentication</p>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/experience.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
  );
}