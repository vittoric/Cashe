export default function Buscador() {
	return(
		<div className="flex items-center gap-2">
		<input
		  type="text"
		  placeholder="Buscar..."
		  className="p-2 my-8 text-white bg-blue-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
		/>
		<button className="p-2 text-gray-700 bg-gray-300 rounded-full ">
		  Buscar
		</button>
	  </div>
	  
)
}