import Vica from "./vica";
import Alex from "./alex";
import Karol from "./karol";
import Lau from "./lau";
import Ale from "./Ale";

export default function Team() {
  const teamMembers = [
    {
      name: "Nicole",
      linkedinUrl: "https://www.linkedin.com/in/nicolepolensvaig/",
    },
    {
      name: "Sara",
      linkedinUrl:
        "https://www.linkedin.com/in/sara-elena-ramos-a90986193/",
    },
    { name: "Karol", linkedinUrl: "https://www.linkedin.com/in/dolvin17/" },
    { name: "Andy", linkedinUrl: "https://www.linkedin.com/in/andreafm/" },
  ];

  return (
    <>
      <div className="h-screen text-white bg-gradient-to-b from-slate-900 via-gray-800 to-blue-900">

        <div className="flex items-center justify-center px-8 py-24 ">
          <div className="max-w-screen-xl mx-auto scale-75">
            <h1 className="text-3xl font-bold text-left text-white md:text-center text-apple-system md:text-3xl animate-pulse">
              EQUIPO
            </h1>
            <div className="flex flex-col items-start justify-center md:gap-16 md:flex-row md:justify-center ">
              {teamMembers.map((member, index) => (
                <div>
                  <div >
                    {member.name === "Nicole" && <Vica />}
                    {member.name === "Sara" && <Alex />}
                    {member.name === "Karol" && <Karol />}
                    {member.name === "Andy" && <Lau />}
                    {member.name === "Andy" && <Ale />}
                  </div>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 transition hover:text-blue-700"
                  >
                    {member.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
