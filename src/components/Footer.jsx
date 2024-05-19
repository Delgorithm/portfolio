import IconGithub from "../assets/logos/IconGitHub";
import IconLinkedin from "../assets/logos/IconLinkedin";
import IconGmail from "../assets/logos/IconMail";

function Footer({ dataContacts }) {
	console.log(dataContacts[0].urlLinkedin);
	const handleGmail = () => {
		window.location.href = `mailto:${dataContacts[0].mailAddress}`;
	};

	const handleLinkedin = () => {
		window.open(dataContacts[0].urlLinkedin, "_blank", "noopener,noreferrer");
	};

	const handleGithub = () => {
		window.open(dataContacts[0].urlGithub, "_blank", "noopener,noreferrer");
	};

	return (
		<section id="contact" className="p-4 bg-mineshaft text-pampas rounded-t-xl">
			<h2 className="text-text-minehsaft text-3xl font-light pt-6">
				Me contacter
			</h2>
			<section className="flex flex-col items-center gap-8 py-10">
				<button onClick={handleGmail}>
					<IconGmail className="text-5xl" />
				</button>
				<button onClick={handleLinkedin}>
					<IconLinkedin className="text-5xl" />
				</button>
				<button onClick={handleGithub}>
					<IconGithub className="text-5xl" />
				</button>
			</section>
			<section>
				<p className="text-center">
					<small>{dataContacts[1].copyright}</small>
				</p>
			</section>
		</section>
	);
}

export default Footer;
