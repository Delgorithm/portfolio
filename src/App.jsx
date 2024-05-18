import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import data from "./data/data.json";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const heroText = data.hero;
	const navbarText = data.navbar;
	const projectsText = data.project;

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<section className="h-screen bg-pampas">
				<Navbar
					navbarText={navbarText}
					handleOpen={handleOpen}
					isOpen={isOpen}
				/>
				<Hero heroText={heroText} />
			</section>
			<Projects projectsText={projectsText} />
		</>
	);
}

export default App;
