import IconCss3Alt from "../assets/logos/IconCSS";
import IconBxlFirebase from "../assets/logos/IconFirebase";
import IconGit from "../assets/logos/IconGit";
import IconGithub from "../assets/logos/IconGitHub";
import IconHtml5 from "../assets/logos/IconHtml";
import IconBxlJavascript from "../assets/logos/IconJavascript";
import IconMysql from "../assets/logos/IconMysql";
import IconNodejs from "../assets/logos/IconNode";
import IconBxlReact from "../assets/logos/IconReact";
import IconBxlTailwindCss from "../assets/logos/IconTailwind";
import BtnResume from "./BtnResume";

const delgoImg = "../Img/delgo01.png";

function MySkills({ skillsText }) {
	return (
		<section
			id="skills"
			className="bg-pampas h-full p-4 rounded-t-xl text-mineshaft xl:px-10">
			<h2 className="text-text-minehsaft text-3xl font-light pt-6 md:text-5xl">
				Compétences
			</h2>
			<section className="md:flex md:flex-col md:justify-center md:items-center">
				<img src={delgoImg} alt="Adrien Douville" className="md:w-96" />
				<article className="grid grid-cols-2 gap-3 items-center text-center md:gap-5">
					<div className="flex items-center gap-2">
						<IconBxlReact className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].firstSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconBxlJavascript className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].secondSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconNodejs className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].ninthSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconMysql className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].eigthSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconBxlFirebase className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].seventhSkill}
						</p>
					</div>

					<div className="flex items-center gap-2">
						<IconBxlTailwindCss className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].tenthSkill}
						</p>
					</div>

					<div className="flex items-center gap-2">
						<IconGit className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].fifthSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconGithub className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].sixthSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconHtml5 className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].thirdSkill}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<IconCss3Alt className="text-2xl xsl:text-4xl md:text-6xl" />
						<p className="xsl:text-lg md:text-2xl">
							{skillsText[0].fourthSkill}
						</p>
					</div>
				</article>
				<div className="flex justify-center py-10">
					<BtnResume />
				</div>
			</section>
		</section>
	);
}

export default MySkills;
