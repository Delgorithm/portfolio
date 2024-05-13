import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
		console.log("ouiiiiiiii");
	};

	return (
		<section className="bg-pampas p-4">
			<Navbar handleOpen={handleOpen} isOpen={isOpen} />
			<Hero />
		</section>
	);
}

export default App;
