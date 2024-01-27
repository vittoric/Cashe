import Image from "next/image";

export default function Payments() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
			<div className="mx-3 text-center">
				<p className="text-xl font-bold text-center">PAYMENTS</p>
				<p className="pb-4 ">Our system automates payments, providing security and transparency.</p>
				<p className="pb-4 ">50% payment upon signing and delivering the property, and 50% upon property return.</p>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/payments.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
	);
}