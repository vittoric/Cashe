import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Whyus from "../Whyus";
import Products from "../Products";
import Starting from "../Stage/Starting"
import Prueba from "../Dashbord/prueba"
import Garantee from "../Stage/Garantee";

export default function Content(){
	return(
		<>
	 <Starting/>
	 <Prueba/>
	 <Garantee/>
		</>
	)
}