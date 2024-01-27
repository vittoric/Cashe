import Image from "next/image";
import Link from "next/link";

export default function Benefits() {
	return (
	<div className="flex items-center justify-center px-8 py-32 text-white bg-black shadow-2xl ">
		<div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
		<div className="flex flex-col items-center">
				<h1 className="text-5xl font-bold text-left text-white md:text-center text-apple-system">
				EZ-to use
				</h1>
		<p className="max-w-xl mx-auto mt-8 text-xl text-white">
		We provide a friendly interface that simplifies the entire rental process. 
		</p>
			<li className="max-w-xl mx-auto mt-8 text-xl text-white">
			Connect your wallet
		</li>
		<li className="max-w-xl mx-auto mt-8 text-xl text-white">
			Find the product you&apos;re looking for
		</li>
		<li className="max-w-xl mx-auto mt-8 text-xl text-white">
			Make and pay your reservation, (you will be charged 50% of the amount when you pick up the product, and the other 50% when you return it)
		</li>
		</div>
			<div className="flex flex-col md:flex-row">
			<Image
			src="/kite.png"
			alt=""
			width={400}
			height={400}
			className="transition duration-700 delay-200 -translate-x-4 translate-y-3 hover:scale-125"
			/>
		</div>
			
		</div>
		</div>
	);
}