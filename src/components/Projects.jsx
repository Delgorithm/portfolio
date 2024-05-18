import ProjectNiklone from "./ProjectNiklone";

function Projects({ projectsText }) {
	return (
		<section className="bg-mineshaft h-full p-4">
			<h2 className="text-pampas text-3xl font-light pt-6">
				{projectsText[0].title}
			</h2>
			<ProjectNiklone projectsText={projectsText} />
		</section>
	);
}

export default Projects;
