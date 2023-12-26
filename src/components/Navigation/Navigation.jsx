import { Link } from "react-router-dom";
import "./Navigation.css";
// import cv from "./cv.docx";
const Navigation = () => {
	return (
		<>
			<header className="nav__section">
				<nav className="nav">
					<div className="container flex items-center flex-col md:flex-row md:justify-between">
						<a href="/Home" className="log__text">
							K.MUMINOV
						</a>
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
						<a
							download=""
							className="btn download_cv p-[0.4rem] text-[12px] rounded-[0.6rem]"
						>
							Скачать Документ
						</a>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
