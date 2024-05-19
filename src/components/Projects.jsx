import CurrentProject from "./currentProject";

function Projects({ projectsText }) {
	return (
		<section
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
		</section>
	);
}

export default Projects;
