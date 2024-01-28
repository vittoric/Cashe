import Navigation from "../../components/Navigation/Navigation";
import Stage from "../../components/Stage/Stage";
import Starting from "../../components/Stage/Starting";
import Howitworks from "../../components/Stage/Howitworks";
import Benefits from "../../components/Stage/Benefits";
import Colateral from "../../components/Stage/Colateral";
import Cards from "../../components/Products/Cards";
import Cards2 from "../../components/Products/Cards2";
import Content from "../../components/Dashbord/content"


export default function Home() {
	return (
		<>
		<div className="h-screen text-white bg-gradient-to-r from-blue-800 to-purple-800"> 
		<Navigation />
		<Stage/>
		<Cards/>
		<Cards2/>
		</div>
	</>
	);
};
