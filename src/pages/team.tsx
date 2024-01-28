import Vica from "./vica";
import Alex from "./alex";
import Karol from "./karol";
import Lau from "./lau";
import Ale from "./Ale";
import Navigation from "../../components/Navigation/Navigation";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    {name: "Vica",linkedinUrl: "https://www.linkedin.com/in/nicolepolensvaig/",},
    {name: "Alex",linkedinUrl:"https://www.linkedin.com/in/sara-elena-ramos-a90986193/",},
    { name: "Karol", linkedinUrl: "https://www.linkedin.com/in/dolvin17/" },
    { name: "Lau", linkedinUrl: "https://www.linkedin.com/in/andreafm/" },
	{ name: "Ale", linkedinUrl: "https://www.linkedin.com/in/andreafm/" },
  ];

  return (
    <>
      <div className="text-white bg-gradient-to-b from-slate-900 via-gray-800 to-blue-900">
	  <Navigation />
        <div className="items-center justify-center px-8 ">
          <div className="max-w-screen-xl mx-auto scale-75">
            <h1 className="text-3xl font-bold text-left text-white md:text-center text-apple-system md:text-3xl animate-pulse">
              EQUIPO
            </h1>
            <div className="flex flex-wrap items-start justify-center md:gap-16 md:justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="mb-6 md:mb-0">
                  <div className="flex flex-row">
                    {member.name === "Vica" && <Vica />}
                    {member.name === "Alex" && <Alex />}
                    {member.name === "Karol" && <Karol />}
                  </div>
                  <div className="flex flex-row ">
                    <div className="pr-8">{member.name === "Lau" && <Lau />}</div>
                    <div className="pl-8">{member.name === "Ale" && <Ale />}</div>
                  </div>
				   
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
