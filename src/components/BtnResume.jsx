import { useState } from "react";
import { TbCloudDownload } from "react-icons/tb";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";

function BtnResume() {
	const [isOpen, setIsOpen] = useState(true);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const btnMotion = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<>
			<button
				onClick={handleOpen}
				className="flex items-center gap-2 py-2 px-3 border xsl:text-xl md:text-3xl border-mineshaft rounded-3xl hover:bg-mineshaft hover:text-cararra active:opacity-55 cursor-pointer">
				<TbCloudDownload className="text-2xl md:text-4xl" /> Obtenir mon CV
			</button>
			{!isOpen ? (
				<>
					<section className="fixed top-0 bg-mineshaft/95 h-full w-full">
						<section className="relative xxs:top-[15%] xs:top-[15%] iphone12:top-[20%] xl:top-[20%] iphone12pro:top-[15%] h-full p-5">
							<section className="flex flex-col justify-around items-center gap-5 ">
								<SlClose
									onClick={handleOpen}
									className="text-5xl text-silver fixed top-[15%] right-5"
								/>
								<img
									src="/Img/cv.png"
									alt="CV d'alternance d'Adrien Douville"
									className="xxs:w-28 xs:w-52 xsl:w-56 iphone12:w-52 iphone12pro:w-60 md:w-72"
								/>
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}
									variants={btnMotion}
									className="text-silver justify-around w-full items-center grid grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4">
									<a
										href="/Img/cv_cdi_adrien_douville.pdf"
										download="Adrien_Douville_cv_cdi.pdf"
										className="flex flex-col items-center gap-4">
										<p className="text-2xl xs:text-3xl  md:text-4xl">CDI</p>
										<TbCloudDownload className="text-6xl xs:text-7xl md:text-8xl text-tundora bg-pampas rounded-lg p-1 active:opacity-60 cursor-pointer" />
									</a>
									<a
										href="/Img/cv_alternance_adrien_douville.pdf"
										download="Adrien_Douville_cv_alternance.pdf"
										className="flex flex-col items-center gap-4">
										<p className="text-2xl  xs:text-3xl md:text-4xl">
											Alternance
										</p>
										<TbCloudDownload className="text-6xl xs:text-7xl md:text-8xl text-tundora bg-pampas rounded-lg p-1 active:opacity-60 cursor-pointer" />
									</a>
									<div className="col-span-2 xl:col-span-1 justify-center items-center">
										<a
											href="/Img/cv_cdi_english_adrien_douville.pdf"
											download="Adrien_Douville_cv_english.pdf"
											className="flex flex-col items-center gap-4">
											<p className="text-2xl  xs:text-3xl md:text-4xl">
												International
											</p>
											<TbCloudDownload className="text-6xl xs:text-7xl md:text-8xl text-tundora bg-pampas rounded-lg p-1 active:opacity-60 cursor-pointer" />
										</a>
									</div>
								</motion.div>
							</section>
						</section>
					</section>
				</>
			) : (
				<></>
			)}
		</>
	);
}

export default BtnResume;
