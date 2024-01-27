import Experience from "./Experience";
import Payments from "./Payments";
import Reputation from "./Reputation";

export default function Howitworks() {
  return (
	<>
		<div className="max-w-screen-xl pt-16 mx-auto rounded-lg px-auto ">
	<h1 className="text-2xl font-bold text-center text-black text-apple-system md:text-3xl">
		Core Features && Renting Process
	</h1>
	<div className="flex flex-col items-start justify-center px-24 md:gap-8 md:flex-row md:justify-center ">
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
	<Experience />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
	<Payments />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
	<Reputation />
		</div>
	</div>
		</div>
	</>
	);
}