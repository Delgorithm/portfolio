import { useState } from "react";
import { TbCloudDownload } from "react-icons/tb";
import { SlClose } from "react-icons/sl";

function BtnResume() {
	const [isOpen, setIsOpen] = useState(true);

	const handleOpen = () => {
		setIsOpen(!isOpen);
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
						<section className="relative xxs:top-[15%] xs:top-[25%] iphone12:top-[25%] xl:top-[20%] iphone12pro:top-[25%] h-full p-5">
							<section className="flex flex-col justify-around items-center gap-5 ">
								<SlClose
									onClick={handleOpen}
									className="text-5xl text-silver fixed top-[15%] right-5"
								/>
								<img
									src="/Img/cv.png"
									alt="CV d'alternance d'Adrien Douville"
									className="xxs:w-40 xs:w-52 xsl:w-56 iphone12:w-52 iphone12pro:w-60 md:w-72"
								/>
								<div className="text-silver flex justify-around w-full items-center">
									<a
										href="/Img/cv_adrien_douville_cdi.pdf"
										download="Adrien_Douville_cv_cdi.pdf"
										className="flex flex-col items-center gap-4">
										<p className="text-2xl xs:text-3xl  md:text-4xl">CDI</p>
										<TbCloudDownload className="text-6xl xs:text-7xl md:text-8xl text-tundora bg-pampas rounded-lg p-1 active:opacity-60 cursor-pointer" />
									</a>
									<a
										href="/Img/cv_adrien_douville_alternance.pdf"
										download="Adrien_Douville_cv_alternance.pdf"
										className="flex flex-col items-center gap-4">
										<p className="text-2xl  xs:text-3xl md:text-4xl">
											Alternance
										</p>
										<TbCloudDownload className="text-6xl xs:text-7xl md:text-8xl text-tundora bg-pampas rounded-lg p-1 active:opacity-60 cursor-pointer" />
									</a>
								</div>
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
