import { IoIosArrowRoundDown } from "react-icons/io";
import { animate, motion } from "framer-motion";

function Hero({ heroText }) {
	const textMotion = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	const floatImg = {
		animate: {
			y: ["2%", "3%"],
			x: ["1%", "1%"],
			rotate: [1, 1, -2, 0],
			transition: {
				y: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: 4,
				},
				x: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: 6,
				},
				rotate: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 8,
				},
			},
		},
	};

	return (
		<section
			id="about"
			className="pt-20 p-4 iphone12:pt-24 xsl:pt-24 md:pt-40 xl:px-10">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				variants={textMotion}>
				<h1 className="xxs:text-5xl xs:text-6xl xxs:-mt-3">
					{heroText[0].title}{" "}
					<span className="xxs:text-4xl xs:text-4xl xsl:text-5xl md:text-6xl">
						{heroText[0].titleNext}
					</span>
				</h1>
				<article className="md:flex relative">
					<section className="z-10">
						<div className="leading-6 font-light xxs:pt-2 xsl:pt-12 xxs:text-xs xs:text-base xsl:text-lg xs:pt-5 iphone12:flex iphone12:flex-col iphone12:gap-1 iphone12pro:gap-5 xl:gap-14">
							<p className="xxs:text-xl md:text-3xl xxs:mt-1">
								{heroText[0].firstP}
							</p>
							<p className="mr-14 xxs:pt-3 xs:pt-0 xsl:pt-2 iphone12:text-base md:text-2xl iphone12:my-1">
								{heroText[0].secondP}
							</p>
							<p className="mr-8 xxs:pt-4 xs:pt-0 xsl:pt-2 iphone12:text-base md:text-2xl iphone12:my-1">
								{heroText[0].thirdP}
							</p>
							<p className="mr-8 xxs:pt-4 xs:pt-0 xsl:pt-2 iphone12:text-base md:text-2xl iphone12:my-1">
								{heroText[0].fourthP}
							</p>
						</div>
					</section>
					<div className="w-full">
						<section className="xxs:hidden md:block z-10">
							<motion.img
								src={heroText[0].imgDelgoFirst}
								alt={heroText[0].altImg}
								className="absolute w-[70%] -right-20 top-10 bg-cararra rounded-tr-[30rem] rounded-bl-[20rem] rounded-tl-[30rem] rounded-br-[20rem]"
								variants={floatImg}
								animate="animate"
							/>
						</section>
					</div>
				</article>
				<div className="flex items-center justify-center xxs:hidden iphone12:flex iphone12:-translate-y-8 xs:mt-10 md:mt-24 motion-safe:animate-pulse font-thin">
					<IoIosArrowRoundDown className="text-5xl pt-1" />
				</div>
			</motion.div>
		</section>
	);
}

export default Hero;
