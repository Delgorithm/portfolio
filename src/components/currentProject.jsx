import { RxGithubLogo, RxVercelLogo } from "react-icons/rx";
import IconBxlFirebase from "../assets/logos/IconFirebase";
import IconNodejs from "../assets/logos/IconNode";
import IconBxlReact from "../assets/logos/IconReact";
import IconBxlStripe from "../assets/logos/IconStripe";
import IconBxlTailwindCss from "../assets/logos/IconTailwind";
import IconMysql from "../assets/logos/IconMysql";
import IconAreaChart from "../assets/logos/IconChart";

const iconMap = {
	IconBxlReact,
	IconNodejs,
	IconBxlTailwindCss,
	IconBxlFirebase,
	IconBxlStripe,
	IconAreaChart,
	IconMysql,
};

function CurrentProject({ project }) {
	const handleRedirectVercel = () => {
		window.open(project.vercelUrl, "_blank", "noopener,noreferrer");
	};
	const handleRedirectGithub = () => {
		window.open(project.githubUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<section className="border rounded-xl bg-tundora shadow-lg px-4 mt-10">
			<article className="flex justify-center items-center ">
				<img src={project.imageUrl} alt={project.imageAlt} className="w-64" />
			</article>
			<article className="text-silver">
				<h3 className="text-2xl mt-1">{project.title}</h3>
				<p className="text-sm">App : {project.theme}</p>
				<div className="w-full h-0.5 my-4 bg-dovegray"></div>
				<div className="grid grid-cols-2 gap-4">
					{project.tools.map((tool, index) => {
						const IconComponent = iconMap[tool.icon];
						return (
							<div
								key={index}
								className={`flex items-center gap-2 ${
									index < 5 ? "" : "col-start-2"
								}`}>
								<IconComponent className="text-2xl" />
								{tool.name}
							</div>
						);
					})}
				</div>
				<div className="w-full h-0.5 my-4 bg-dovegray"></div>
				<article className="flex justify-around gap-4 my-4">
					<button
						onClick={handleRedirectVercel}
						className="flex items-center gap-2 border my-3 px-5 rounded-xl bg-cararra shadow-lg hover:motion-safe:animate-pulse active:opacity-65 active:translate-y-0.5">
						<RxVercelLogo className="text-2xl text-mineshaft" />
						<p className="text-mineshaft">{project.demo}</p>
					</button>
					<button
						onClick={handleRedirectGithub}
						className="flex items-center gap-2 border my-3 px-5 rounded-xl bg-cararra shadow-lg hover:motion-safe:animate-pulse active:opacity-65 active:translate-y-0.5">
						<RxGithubLogo className="text-2xl text-mineshaft" />
						<p className="text-mineshaft">{project.code}</p>
					</button>
				</article>
			</article>
		</section>
	);
}

export default CurrentProject;
