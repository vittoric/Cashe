import Link from "next/link";
import Image from "next/image";

export default function Stage() {
  return (
    <div className="grid flex-wrap items-center justify-center grid-cols-2 px-8 pt-24 sm:pt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="px-24 mt-4 font-bold text-right skew-x-6 -trangrayslate-y-8 text- text-7xl sm:text-5xl shadow-color-black">
          Llevando la pirateria hacia un nuevo Puerto
        </div>
        <div className="max-w-lg mt-4 ml-12 text-black shadow-color-black sm:text-2xl">
          We are a Marketplace lorem ipsum
          <p className="mt-4 ml-4 text-sm">
            Our dapp ensures seamless transactions,
          </p>
          <form className="flex items-center justify-center my-16 sm:my-24">
            <Link
              href="/"
              target="_blank"
              className="px-5 py-3 font-medium text-white transition bg-black rounded-full md:text-xl hover:bg-blue-400"
            >
              Know more!
            </Link>
          </form>
        </div>
      </div>
      <div className="static flex flex-col items-center justify-center">
        <div className="flex flex-row ">
          <div className="transition duration-700 delay-100 -translate-x-4 -translate-y-3 hover:scale-150">
            <Image src="/logo.svg" alt="" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
