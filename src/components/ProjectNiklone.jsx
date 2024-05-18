import { RxGithubLogo, RxVercelLogo } from "react-icons/rx";
import IconBxlFirebase from "../assets/logos/IconFirebase";
import IconNodejs from "../assets/logos/IconNode";
import IconBxlReact from "../assets/logos/IconReact";
import IconBxlStripe from "../assets/logos/IconStripe";
import IconBxlTailwindCss from "../assets/logos/IconTailwind";

const imgNiklone = "../Img/project-niklone-04.png";

function ProjectNiklone({ projectsText }) {
	const firstProject = projectsText[0].niklone[0];
	const handleRedirectVercel = () => {
		window.open(
			"https://niklone.vercel.app/",
			"_blank",
			"noonpener,noreferrer"
		);
	};
	const handleRedirectGithub = () => {
		window.open(
			"https://github.com/Delgorithm/Niklone",
			"_blank",
			"noonpener,noreferrer"
		);
	};
	return (
		<section>
			<section className="border rounded-lg bg-tundora shadow-lg py-4 px-4 mt-10">
				<article className="flex justify-center items-center ">
					<img
						src={imgNiklone}
						alt="Niklone : E-commerce project"
						className="w-64"
					/>
				</article>
				<article className="text-silver">
					<h3 className="text-2xl mt-1">{firstProject.title}</h3>
					<p className="text-sm">App : {firstProject.theme}</p>
					<div className="w-full h-0.5 my-3 bg-dovegray"></div>
					<div className="flex justify-between">
						<ul className="flex flex-col gap-2">
							<li className="flex items-center gap-2">
								<span className="text-2xl">
									<IconBxlReact />
								</span>
								{firstProject.outils1}
							</li>
							<li className="flex items-center gap-2">
								<span className="text-2xl">
									<IconBxlTailwindCss />
								</span>
								{firstProject.outils2}
							</li>
						</ul>
						<ul className="flex flex-col gap-2">
							<li className="flex items-center gap-2">
								<span className="text-2xl">
									<IconBxlFirebase />
								</span>
								{firstProject.outils3}
							</li>
							<li className="flex items-center gap-2">
								<span className="text-2xl">
									<IconBxlStripe />
								</span>
								{firstProject.outils4}
							</li>
							<li className="flex items-center gap-2">
								<span className="text-2xl">
									<IconNodejs />
								</span>
								{firstProject.outils5}
							</li>
						</ul>
					</div>
					<div className="w-full h-0.5 my-3 bg-dovegray"></div>
					<article className="flex justify-around py-4">
						<button
							onClick={handleRedirectVercel}
							className="flex items-center gap-2 border p-3 rounded-xl bg-cararra shadow-lg hover:motion-safe:animate-pulse active:opacity-65 active:translate-y-0.5">
							<span className="text-2xl text-mineshaft">
								<RxVercelLogo />
							</span>
							<p className="text-mineshaft">{firstProject.demo}</p>
						</button>
						<button
							onClick={handleRedirectGithub}
							className="flex items-center gap-2 border p-3 rounded-xl bg-cararra shadow-lg hover:motion-safe:animate-pulse active:opacity-65 active:translate-y-0.5">
							<span className="text-2xl text-mineshaft">
								<RxGithubLogo />
							</span>
							<p className="text-mineshaft">{firstProject.code}</p>
						</button>
					</article>
				</article>
			</section>
		</section>
	);
}

export default ProjectNiklone;
