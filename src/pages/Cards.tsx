import Image from "next/image";
import Link from "next/link";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiStopwatch } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { GiDramaMasks } from "react-icons/gi";
import { GiDirectorChair } from "react-icons/gi";
import Navigation from "../../components/Navigation/Navigation";




export default function Cards() {
  return (
    <>
	 <Navigation />
      <div className="relative bg-gradient-to-r from-blue-800 to-purple-800"> 
      <div className="flex flex-col items-center justify-center py-8 pt-24 pb-8 text-gray-900 mt-36">
        <h1 className="text-3xl font-bold tracking-widest">
          AVAILABLE FOR RENT
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-12 text-gray-600">
		<div className="bg-white rounded-2xl" >
		  <ProductCards
            name="Roach trip"
            imageURL="/roachtrip.png"
            href="https://opensea.io/karolhuertas.eth"
            rating="8.3"
            precios="1$ VOTTUN"
            info="See more like this"
            duration="120 min"
            website="/"
            genero="Tragedia"
            director="Ari Aster "
          />
		  </div>
		  <div className="bg-white rounded-2xl" >
            <ProductCards
            name="Scandalous"
            imageURL="/imagen2.png"
            href="https://opensea.io/karolhuertas.eth"
            rating="9.3"
            precios="4$ VOTTUN"
            info="See more like this"
            duration="160 min"
            website="/"
            genero="Tragedia"
            director="Kelly Reichardt"
          />
		  </div>
		  <div className="bg-white rounded-2xl" >
            <ProductCards
            name="Goodbye Horses"
            imageURL="/horses.png"
            href="https://opensea.io/karolhuertas.eth"
            rating="7.4"
            precios="2$ VOTTUN"
            info="See more like this"
            duration="180 min"
            website="/"
            genero="Drama"
            director="Robert Eggers "

          />
		  </div>
		  <div className="bg-white rounded-2xl" >
            <ProductCards
            name="Wine club"
            imageURL="/imagen7.png"
            href="https://opensea.io/karolhuertas.eth"
            rating="4.2"
            precios="3$ VOTTUN"
            info="See more like this"
            duration="155 min"
            website="/"
            genero="Terror"
            director="Sean Baker "
          />
		  </div>
		  <div className="bg-white rounded-2xl" >
            <ProductCards
            name="Solbrud"
            imageURL="/imagen6.png"
            href="https://opensea.io/karolhuertas.eth"
            rating="6.9"
            precios="1$ VOTTUN"
            info="See more like this"
            duration="217 min"
            website="/"
            genero="Musical"
            director="Daniel Kwan "
          />
		  </div>
        </div>
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

}) {
  return (
    <article className="flex flex-col w-full max-w-[16rem]  hover:skew-y-3 shadow-2xl transition border-2 rounded-2xl overflow-hidden border-black hover:shadow-m ">
      <div className="relative w-full h-[16rem] bg-white">
        <Image
          className="transition-transform bg-black border-2 border-black rounded-b-none object-fit hover:scale-90 h-fit w-fill "
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
            <GiDirectorChair size={25} /> {director}
          </div>
          <div className="flex items-center gap-3 px-2 mt-1 ">
            {" "}
            <GiStopwatch size={25} /> {duration}
          </div>
          <Link
            href={href}
            target="_blank"
            className="flex items-center gap-3 px-2 mb-1 text-gray-900 hover:underline"
          >
            <GiDramaMasks size={25} />
            {genero}
          </Link>
          <Link
            href={href}
            target="_blank"
            className="flex items-center gap-3 px-2 pb-4 text-gray-900 hover:underline"
          >
            <FcRating size={25} />
              {rating}
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
