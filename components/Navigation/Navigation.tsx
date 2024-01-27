import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Whyus from "../Whyus";
import Products from "../Products";
import Team from "../Dashbord/team";

export default function Navigation() {
  const LINKS = (
    <Fragment>
      <Whyus />
	  <Team/>
      <Products />
      <w3m-network-button />
      <w3m-button />
    </Fragment>
  );
  return (
    <div className="sticky z-50 flex justify-center w-full bg-red-200< top-4">
      <div className="flex items-center mt-1	 gap-16 text-white bg-black backdrop-blur-lg border border-white h-20 px-8 mx-auto rounded-full max-w-[54rem]">
        <Link className="flex-shrink-0 max-w-[5rem]" href="/">
          <Image src="/logo.svg" alt="Rentez Logo" height="50" width="70" />
        </Link>
        {LINKS}
      </div>
    </div>
  );
}
