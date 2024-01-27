import Vica from "../pages/Vica"
export default function Team() {
	const teamMembers = [
	  {
		name: "Nicole",
		linkedinUrl: "https://www.linkedin.com/in/nicolepolensvaig/",
	  },
	  {
		name: "Sara",
		linkedinUrl: "https://www.linkedin.com/in/sara-elena-ramos-a90986193/",
	  },
	  { name: "Karol", linkedinUrl: "https://www.linkedin.com/in/dolvin17/" },
	  { name: "Andy", linkedinUrl: "https://www.linkedin.com/in/andreafm/" },
	];
  
	return (
	  <>
		 <div className="h-screen text-white bg-gradient-to-b from-slate-900 via-gray-800 to-blue-900"> 
		<div className="flex items-center justify-center px-8 py-24 ">
		  <div className="max-w-screen-xl mx-auto scale-75 bg-blue-400 px-auto">
			<h1 className="text-3xl font-bold text-left text-black md:text-center text-apple-system md:text-3xl animate-pulse">
			  EQUIPO
			</h1>
			<div className="flex flex-col items-start justify-center md:gap-16 md:flex-row md:justify-center ">
			  {teamMembers.map((member, index) => (
				<div
				  key={index}
				  className="flex flex-col items-center max-w-sm mx-auto mb-6 md:mb-0"
				>
				  <div>
					{member.name === "Nicole" && <Vica />}
					{member.name === "Sara" && <Vica />}
					{member.name === "Karol" && <Vica />}
					{member.name === "Andy" && <Vica />}
				  </div>
				  <a
					href={member.linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 text-blue-500 hover:text-blue-700"
				  >
					 
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
  