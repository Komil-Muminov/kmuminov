import "./Navigation.css";
// import { MenuBook } from "@mui/icons-material";
import Log from "./nav-image/educ-log.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<>
			<>
				<header className={`${!isMobile ? "header header-pc" : "hidden"}`}>
					<div className="header-container max-w-7xl m-auto py-10">
						<div className="header-wrapper flex justify-center items-center gap-3 flex-col md:flex-row md:justify-between md:items-center">
							<div className="header-log-wrapper flex items-center">
								<img src={Log} alt="log" />
								<p className="sections-desc header-nav-desc text-2xl ">
									Academy-tea
								</p>
							</div>
							<nav className="header-navigation text-white flex flex-wrap justify-center items-center gap-2 px-4 text-xl">
								<Link data-aos="fade-right" className="header-item" to="/home">
									Home
								</Link>

								<Link
									data-aos="fade-left"
									className="header-item"
									to="/FullScrenn"
								>
									Courses
								</Link>

								<Link
									data-aos="fade-left"
									className="header-item"
									to="/FullscrnMiddle"
								>
									PRO courses
								</Link>

								<Link
									data-aos="fade-right"
									className="header-item"
									to="/FullscrnBottom"
								>
									Start
								</Link>

								<Link
									data-aos="fade-left"
									className="header-item"
									to="/FullscrnBottomm"
								>
									Growing
								</Link>

								<button className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 duration-200 px-1 py-1 rounded-md  md:p-1">
									Join
								</button>
								<button className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 duration-200 px-1 py-1 rounded-md  md:p-1">
									Registration
								</button>
							</nav>
						</div>
					</div>
				</header>
				{/* <header className="mobile-header ">
					<div className="isMobile-container py-14">
						<div className="header-log-wrapper isMobile-log flex  items-center justify-center px-7">
							<img src={Log} alt="log" />
							<p>Educare</p>
						</div>
						<div className="isMobiel-btn-wrapper  flex justify-center items-center ">
							<button
								className="btn btn-isMobile "
								onClick={() => setIsMobile(!isMobile)}
							>
								<MenuBook className="isMobile-icon" />
							</button>
						</div> */}
				{/* {isMobile && (
							<>
								<div className="header-container max-w-7xl m-auto ">
									<div className="header-wrapper flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center">
										<nav className="header-navigation text-white flex flex-col justify-center items-center gap-2 px-5 text-xl">
											<Link className="header-item">Home</Link>
											<Link className="header-item">About</Link>
											<Link className="header-item">Courses</Link>
											<button className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 px-1 py-1 rounded-md  md:p-1">
												Join
											</button>
											<button className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 px-1 py-1 rounded-md  md:p-1 ">
												Registration
											</button>
										</nav>
									</div>
								</div>
							</>
						)} */}
				{/* </div>
				</header> */}
			</>
		</>
	);
};

export default Navigation;
