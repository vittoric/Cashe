import Image from "next/image";
import Link from "next/link";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { BiHappyBeaming } from "react-icons/bi";
import { GiBreakingChain } from "react-icons/gi";
import { RiCopperCoinFill } from "react-icons/ri";







export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 pt-24 pb-8 text-gray-900 mt-36">
        <h1 className="text-3xl font-bold tracking-widest">
          AVAILABLE FOR RENT
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-12 text-gray-600">
          <ProductCards
            name="Cloud"
            imageURL="/open1.png"
            href="https://opensea.io/karolhuertas.eth"
            precios="2$ VOTTUN"
            info="See more like this"
            duration="ERC-721"
            website="/"
            genero="Polygon"
            director="Ari Aster "
          />
            <ProductCards
            name="Punkbits"
            imageURL="/open2.png"
            href="https://opensea.io/karolhuertas.eth"
            precios="3$ VOTTUN"
            info="See more like this"
            duration="ERC-721"
            website="/"
            genero="Polygon"
            director="Kelly Reichardt"
          />
            <ProductCards
            name="Fractal"
            imageURL="/open5.png"
            href="https://opensea.io/karolhuertas.eth"
            precios="1$ VOTTUN"
            info="See more like this"
            duration="ERC-721"
            website="/"
            genero="Rootstock"
            director="Robert Eggers "

          />
            <ProductCards
            name="Breinbit"
            imageURL="/open3.png"
            href="https://opensea.io/karolhuertas.eth"
            precios="2$ VOTTUN"
            info="See more like this"
            duration="ERC-721"
            website="/"
            genero="Polygon"
            director="Sean Baker "
          />
            <ProductCards
            name="Moca"
            imageURL="/open7.png"
            href="https://opensea.io/karolhuertas.eth"
            precios="1 $ VOTTUN"
            info="See more like this"
            duration="ERC-721"
            website="/"
            genero="Rootstock"
            director="Daniel Kwan "
          />
        </div>
      </div>
    </>
  );
}
function ProductCards({
  name,
  imageURL,
  rating,
  precios,
  info,
  duration,
  href,
  website,
  genero,
  director,
  propietario,
}: {
  name: string;
  imageURL: string;
  rating: string;
  precios: string;
  info: string;
  duration: string;
  href: string;
  website: string;
  genero: string;
  director: string;
  propietario: string;

}) {
  return (
    <article className="flex flex-col w-full max-w-[16rem] mt-8 hover:skew-y-3 shadow-2xl transition border-2 rounded-2xl overflow-hidden border-black hover:shadow-m ">
      <div className="relative w-full h-[16rem]">
        <Image
          className="object-contain bg-black border-2 border-black rounded-b-none object-full h-fit w-fill "
          fill
          src={imageURL}
          alt=""
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent">
          <h3 className="px-3 text-xl font-bold uppercase">{name}</h3>
          <p className="px-3 text-blue-600">{precios}</p>
          <div className="flex items-center gap-3 px-2 mt-4 ">
            {" "}
            <BiHappyBeaming  size={25} /> {director}
          </div>
          <div className="flex items-center gap-3 px-2 mt-1 ">
            {" "}
            <RiCopperCoinFill size={25} /> {duration}
          </div>
          <Link
            href={href}
            target="_blank"
            className="flex items-center gap-3 px-2 mb-1 text-gray-900 hover:underline"
          >
            <GiBreakingChain size={25} />
            {genero}
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
