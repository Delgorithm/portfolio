import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
	return (
		<section className="pt-10">
			<h1 className="text-5xl flex flex-col gap-4 uppercase font-light pb-4">
				Développeur <span>Web / Frontend</span>
			</h1>
			<article className="leading-6 font-light pt-3">
				<p>Bienvenue,</p>
				<p className="mr-14 pt-4">
					Je suis Adrien Douville, un développeur web axé sur le Frontend.
				</p>
				<p className="mr-8 pt-6">
					💻 Après une année de formation en autodidacte dans ce milieu qui me
					passionne. Ainsi que 5 mois intensifs au sein de la Wild Code School
				</p>
				<p className="mr-8 pt-6 ">
					🎓 Me voici prêt à travailler et apprendre davantage pour mener à bien
					la réalisation des différents projets qui me sont destinés.
				</p>
			</article>
			<p className=" flex items-center justify-center p-20 rotate-90 motion-safe:animate-pulse font-thin">
				En savoir plus <IoIosArrowRoundForward className="text-5xl pt-1" />
			</p>
		</section>
	);
}

export default Hero;
