import Image from "next/image";

export default function Colateralizating() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-1">
			<div className="mx-3 text-center">
				<p className="text-xl font-bold text-center"> WHAT HAPPENS</p>
				<p className="pb-4 ">When you return the item in perfect condition and within the agreed period, you will receive your collateral back immediately. </p>
				<p className="pb-4 ">Your initial investment translates into long-term savings and exclusive benefits. If the experience was satisfactory for both of you, you will receive an NFT.</p>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/end.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
  );
}