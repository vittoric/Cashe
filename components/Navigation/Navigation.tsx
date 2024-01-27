import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Whyus from "../Whyus";
import Products from "../Products";
import Team from "../Dashbord/team";
import Buscador from "../Navigation/Bucador"
import { AiOutlineMenuUnfold } from "react-icons/ai";
 

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
  const LINKS = (
    <Fragment>
	<Buscador/>
    <div className="bg-blue-900 rounded-full"><w3m-network-button /></div>
    <div className="!bg-blue-900 !rounded-full"> <w3m-button/></div>
    </Fragment>
  );
  return (
	  <div>
    <div className="fixed z-50 flex justify-center w-full mx-4 top-4">
  <div className="flex items-center mt-4 gap-16 text-white bg-black backdrop-blur-lg border border-white h-20 px-8 mx-auto rounded-full max-w-[90rem]">
    <Link className="flex-shrink-0 max-w-[6rem]" href="/">
      <Image
        src="/logo.svg"
        alt="CASHE Logo"
        height="50"
        width="90"
      />
    </Link>
	<button
          type="button"
          
          onClick={() => setIsOpen(!isOpen)}
        >
        <AiOutlineMenuUnfold className="text-4xl text-white"/>
        </button>
		 
		 
    {LINKS}

  </div>
</div>
	<section

	style={{position:"absolute",}}
        className={`flex-col max-w-[20rem] h-2/6 items-center mt-20 ml-[300px] inset-7  !z-50 py-4 bg-white [&_button]:underline [&_button]:underline-offset-8 rounded-xl drop-shadow-lg bg-white/80 backdrop-blur-lg border-white  text-black gap-2  
		${isOpen ? "flex" : " hidden"}`}	
      >
        Quienes somos <br></br>
		Quienes somos <br></br>
		Quienes somos <br></br>
		Quienes somos <br></br>
		
      </section>
</div>

  );
}
