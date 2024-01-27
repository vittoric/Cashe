import Image from "next/image";
import Link from "next/link";

export default function Starting() {
  return (
    <div className="flex items-center justify-center px-8 py-32 text-white bg-black shadow-2xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/snowboard.png"
            alt=""
            width={700}
            height={700}
            className="transition duration-700 delay-200 -translate-x-4 translate-y-3 hover:scale-125"
          />
        </div>
        <div className="flex flex-col text-start">
          <h1 className="text-4xl font-bold text-center text-white text-apple-system">
            Renting Made EZ
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-xl text-center">
            1. Rent high-quality sport equipment in your area
          </p>
          <p className="max-w-xl mx-auto mt-8 text-xl text-center">
            2. Surfing kitesurfing, hiking, you name it. RentEZ grants you
            access to quality gear without the hefty price tag.
          </p>
        </div>
      </div>
    </div>
  );
}
