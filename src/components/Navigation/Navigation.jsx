import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOpenRounded } from "@mui/icons-material";
import "./Navigation.css";
// import cv from "./cv.docx";
const Navigation = () => {
	const [isMobile, setIsMobile] = useState(false);
	const handleIsMobile = () => {
		setIsMobile((prev) => !prev);
		// Ваш код здесь.
		console.log(isMobile);
	};
	return (
		<>
			<header className="nav__section">
				<nav className={`nav`}>
					<Link to="/Home" className="log__text md:hidden">
						K.MUMINOV
					</Link>
					<span
						onClick={handleIsMobile}
						className="nav_burger flex justify-end items-center md:hidden"
					>
						<MenuOpenRounded className="" />
					</span>
					<div className="container hidden md:flex  md:flex-row md:justify-between">
						<Link to="/Home" className="log__text hidden md:block">
							K.MUMINOV
						</Link>

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

					{isMobile && (
						<>
							<div className="container flex flex-col items-end  md:flex-row md:justify-between">
								<Link to="/Home" className="log__text hidden md:block">
									K.MUMINOV
								</Link>
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
								<Link download="" className="btn download_cv ">
									Скачать Документ
								</Link>
							</div>
						</>
					)}
				</nav>
			</header>
		</>
	);
};

export default Navigation;
