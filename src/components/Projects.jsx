import CurrentProject from "./currentProject";

function Projects({ projectsText }) {
	return (
		<section className="bg-mineshaft h-full p-4 rounded-t-xl rounded-br-xl">
			<h2 className="text-pampas text-3xl font-light pt-6">Projets</h2>
			{projectsText.map((project, index) => {
				return <CurrentProject key={index} project={project} />;
			})}
		</section>
	);
}

export default Projects;
