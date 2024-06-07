import CurrentProject from "./currentProject";
import { motion } from "framer-motion";

function Projects({ projectsText }) {
	const projectMotion = {
		hidden: { opacity: 0.8, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			variants={projectMotion}
			id="project"
			className="bg-mineshaft h-full p-4 rounded-t-xl rounded-br-xl xl:px-10">
			<h2 className="text-pampas text-3xl md:text-5xl font-light pt-6">
				Projets
			</h2>
			<div className="xl:flex xl:gap-24">
				{projectsText.map((project, index) => {
					return <CurrentProject key={index} project={project} />;
				})}
			</div>
		</motion.section>
	);
}

export default Projects;
