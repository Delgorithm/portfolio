import { IoIosArrowRoundDown } from "react-icons/io";

function Hero({ heroText }) {
	return (
		<section className="xs:pt-6 xsl:pt-10 p-4">
			<h1 className="xxs:text-5xl xs:text-6xl xxs:-mt-3">
				{heroText[0].title}{" "}
				<span className="xxs:text-4xl xs:text-4xl xsl:text-5xl">
					{heroText[0].titleNext}
				</span>
			</h1>
			<article className="leading-6 font-light xxs:pt-2 xsl:pt-12 xxs:text-xs xs:text-base xsl:text-lg xs:pt-5 iphone12:flex iphone12:flex-col iphone12:gap-5">
				<p className="xxs:text-xl xxs:mt-1">{heroText[0].firstP}</p>
				<p className="mr-14 xxs:pt-3 xs:pt-3 xsl:pt-6 iphone12:text-base">
					{heroText[0].secondP}
				</p>
				<p className="mr-8 xxs:pt-4 xs:pt-3 xsl:pt-6 iphone12:text-base">
					{heroText[0].thirdP}
				</p>
				<p className="mr-8 xxs:pt-4 xs:pt-3 xsl:pt-6 iphone12:text-base">
					{heroText[0].fourthP}
				</p>
			</article>
			<div className=" flex items-center justify-center xs:mt-10 iphone12:mt-5 motion-safe:animate-pulse font-thin">
				<IoIosArrowRoundDown className="text-5xl pt-1" />
			</div>
		</section>
	);
}

export default Hero;
