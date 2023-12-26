import { Link } from "react-router-dom";
import { MenuOpenRounded } from "@mui/icons-material";
import "./Navigation.css";
// import cv from "./cv.docx";
const Navigation = () => {
	return (
		<>
			<header className="nav__section">
				<nav className="nav">
					<Link href="/Home" className="log__text md:hidden">
						K.MUMINOV
					</Link>
					<div className="container flex flex-col items-end  md:flex-row md:justify-between">
						<Link href="/Home" className="log__text hidden md:block">
							K.MUMINOV
						</Link>
						<span className="nav_burger block md:hidden">
							<MenuOpenRounded className="" />
						</span>

						<Link className="nav__item" to="/Home">
							(Home)
						</Link>
						<Link className="nav__item" to="/Banner">
							BANNER
						</Link>
						<Link className="nav__item" to="/Content">
							PAST LIVES
						</Link>
						<Link className="nav__item" to="/Contacts">
							Contact
						</Link>
						<Link className="nav__item" to="/Editing">
							ISEDITING
						</Link>
						<Link download="" className="btn download_cv">
							Скачать Документ
						</Link>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
