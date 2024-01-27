import Image from "next/image";

export default function Reputation() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
			<div className="mx-3 text-center">
				<p className="text-xl font-bold text-center"> REPUTATION </p>
				<p className="pb-4 "> Each positive interaction earns both landlords and tenants Reputation NFTs</p>
				<p className="pb-4 "> These NFTs establish a transparent and trustworthy community.</p>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/reputation.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
  );
}