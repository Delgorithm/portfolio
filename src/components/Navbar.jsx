import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function Navbar({ navbarText, hamburgerText, handleOpen, isOpen }) {
	return (
		<nav className="fixed flex items-center justify-between xxs:px-4 xxs:py-1 md:py-6 xl:px-10 bg-pampas w-full rounded-b-xl shadow-lg z-20 transform transition ease-in-out delay-150">
			<a href="#about" className="text-2xl md:text-4xl">
				{navbarText[0].title}
			</a>
			<ul className="xxs:hidden xl:flex">
				<li>
					<a href="#about" className="text-3xl font-thin">
						<span className="text-lg px-5">01.</span>
						{hamburgerText[0].about}
					</a>
				</li>
				<li>
					<a href="#project" className="text-3xl font-thin">
						<span className="text-lg px-5">02.</span>
						{hamburgerText[0].projects}
					</a>
				</li>
				<li>
					<a href="#skills" className="text-3xl font-thin">
						<span className="text-lg px-5">03.</span>
						{hamburgerText[0].skills}
					</a>
				</li>
				<li>
					<a href="#contact" className="text-3xl font-thin">
						<span className="text-lg px-5">04.</span>
						{hamburgerText[0].contact}
					</a>
				</li>
			</ul>

			<button onClick={handleOpen} className="p-2 cursor-pointer xl:hidden">
				{isOpen ? (
					<RxHamburgerMenu className="text-3xl md:text-4xl" />
				) : (
					<RxCross1 className="text-3xl" />
				)}
			</button>
			{isOpen ? (
				""
			) : (
				<section className="fixed h-full w-screen bg-mineshaft/50 backdrop-blur-sm top-0 right-0 z-20 transform transition ease-in-out delay-150">
					<div className="text-pampas flex flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-80 md:w-1/2 bg-mineshaft">
						<button onClick={handleOpen}>
							<RxCross1 className="text-3xl text-pampas fixed xxs:top-3 xxs:right-6  xsl:top-6 xsl:right-6 md:top-8 md:right-7" />
						</button>
						<ul className="flex flex-col gap-6">
							<li className="w-full h-0.5 my-4 bg-dovegray"></li>
							<li>
								<a
									href="#about"
									onClick={handleOpen}
									className="text-3xl font-thin">
									<span className="text-lg px-5">01.</span>
									{hamburgerText[0].about}
								</a>
							</li>
							<li className="w-full h-0.5 my-4 bg-dovegray"></li>
							<li>
								<a
									href="#project"
									onClick={handleOpen}
									className="text-3xl font-thin">
									<span className="text-lg px-5">02.</span>
									{hamburgerText[0].projects}
								</a>
							</li>
							<li className="w-full h-0.5 my-4 bg-dovegray"></li>
							<li>
								<a
									href="#skills"
									onClick={handleOpen}
									className="text-3xl font-thin">
									<span className="text-lg px-5">03.</span>
									{hamburgerText[0].skills}
								</a>
							</li>
							<li className="w-full h-0.5 my-4 bg-dovegray"></li>
							<li>
								<a
									href="#contact"
									onClick={handleOpen}
									className="text-3xl font-thin">
									<span className="text-lg px-5">04.</span>
									{hamburgerText[0].contact}
								</a>
							</li>
						</ul>
					</div>
				</section>
			)}
		</nav>
	);
}

export default Navbar;
