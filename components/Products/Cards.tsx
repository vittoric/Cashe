import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiMagnifyingGlass } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 pt-24 pb-8">
        <h1 className="text-3xl font-bold tracking-widest">
          AVAILABLE FOR RENT
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-12">
          <ProductCards
            name="SANDBOARD w42"
            imageURL="/snowboard.png"
            href="https://opensea.io/karolhuertas.eth"
            owner="karolhuertas.eth"
            precios="15€/day"
            info="See more like this"
            location="Istambul, Sisli"
            website="/"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-12">
          <ProductCards
            name="vicky"
            imageURL="/logo.svg"
            href="https://opensea.io/karolhuertas.eth"
            owner="vicky.eth"
            precios="1w5€/day"
            info="See more like this"
            location="Istambul, Sisli"
            website="/"
          />
        </div>
      </div>
    </>
  );
}
function ProductCards({
  name,
  imageURL,
  owner,
  precios,
  info,
  location,
  href,
  website,
}: {
  name: string;
  imageURL: string;
  owner: string;
  precios: string;
  info: string;
  location: string;
  href: string;
  website: string;
}) {
  return (
    <article className="flex flex-col w-full max-w-[16rem] mt-8 hover:skew-y-3 shadow-2xl transition border-2 rounded-2xl overflow-hidden border-black hover:shadow-m ">
      <div className="relative w-full h-[12rem]">
        <Image
          className="object-cover bg-black border-2 border-black rounded-b-none h-fit w-fill "
          fill
          src={imageURL}
          alt=""
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent">
          <h3 className="px-3 text-xl font-bold uppercase">{name}</h3>
          <p className="px-3 text-blue-600">{precios}</p>
          <div className="flex items-center gap-3 px-2 mt-4 mb-2 ">
            {" "}
            <FaMapLocationDot size={25} /> {location}
          </div>
          <Link
            href={href}
            target="_blank"
            className="flex items-center gap-3 px-2 pb-4 mt-2 mb-3 text-gray-900 hover:underline"
          >
            <ImUserTie size={25} />
            {owner}
          </Link>
          <div className="scale-150 bg-white">
            <Link
              href={website}
              target="_blank"
              className="flex flex-row items-center justify-center gap-3 px-12 py-1 -mb-2 text-xs text-center text-gray-900 transition scale-75 hover:underline"
            >
              {info}
              <GiMagnifyingGlass size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
