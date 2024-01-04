import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOpenRounded } from "@mui/icons-material";
import "./Navigation.css";
import log from "./km.png";
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
					<Link to="/Home" className="flex justify-center h-16 md:hidden">
						<img src={log} alt="log" />
					</Link>
					<span
						onClick={handleIsMobile}
						className="nav_burger flex justify-end items-center md:hidden"
					>
						<MenuOpenRounded
							sx={{ fontSize: "2.5rem" }}
							className="burger__menu"
						/>
					</span>
					<div className="container ">
						<div className="nav_content hidden md:flex  md:flex-row md:justify-between md:items-center">
							<Link to="/Home" className="log__text hidden md:block">
								<img src={log} alt="log" className="log_img" />
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
