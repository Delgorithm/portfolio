import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";

import data from "./data/data.json";
import dataProjects from "./data/dataProjects.json";
import dataSkills from "./data/dataSkills.json";
import dataContacts from "./data/dataContacts.json";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const heroText = data.hero;
	const navbarText = data.navbar;
	const projectsText = dataProjects;
	const skillsText = dataSkills;

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
			<MySkills skillsText={skillsText} />
			<Footer dataContacts={dataContacts} />
		</>
	);
}

export default App;
