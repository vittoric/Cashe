import Colateralizating from "./Colateralizating";
import Garantee from "./Garantee";
import Whatcanbecol from "./Whatcanbecol";

export default function Colateral() {
  return (
	<>
		<div className="max-w-screen-xl mx-auto rounded-lg px-auto ">
		<div className="flex flex-col items-start justify-center px-24 md:gap-8 md:flex-row md:justify-center ">
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Garantee />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Whatcanbecol />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Colateralizating />
		</div>
		</div>
		</div>
	</>
	);
}