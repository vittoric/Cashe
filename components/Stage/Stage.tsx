import Link from "next/link";
import Image from "next/image";

export default function Stage() {
  return (
    <div className="grid flex-wrap items-center justify-center grid-cols-2 px-8 sm:pt-36">
      <div className="flex flex-col items-center justify-center">
        <div className="px-24 mt-48 font-mono font-bold text-center skew-x-6 -trangrayslate-y-8 text- text-7xl sm:text-5xl shadow-color-black">
          Llevando la pirateria hacia un nuevo Puerto
        </div>
        <div className="max-w-lg mt-4 ml-12 text-center text-white shadow-color-black sm:text-2xl">
         Nuestro Norte es la integracion de nuevas tecnologias con la propiedad digital

          <form className="flex items-center justify-center my-16 sm:my-24">
            <Link
              href="/"
              target="_blank"
              className="px-5 py-3 font-medium text-blue-900 transition bg-white rounded-full md:text-xl hover:bg-blue-400"
            >
              ¡Navega!
            </Link>
          </form>
        </div>
      </div>
      <div className="static flex flex-col items-center justify-center">
        <div className="flex flex-row ">
          <div className="animate-jump animate-infinite animate-duration-[7000ms] animate-delay-[800ms] animate-ease-in">
            <Image src="/graph.svg" alt="" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
