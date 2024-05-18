import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function Navbar({ navbarText, handleOpen, isOpen }) {
	return (
		<nav className="flex items-center justify-between p-4">
			<p className="text-2xl">{navbarText[0].title}</p>

			<button onClick={handleOpen} className="p-2">
				{isOpen ? (
					<RxCross1 className="text-3xl" />
				) : (
					<RxHamburgerMenu className="text-3xl" />
				)}
			</button>
		</nav>
	);
}

export default Navbar;
