import "./Navigation.css";
// import { MenuBook } from "@mui/icons-material";
import Log from "./nav-image/educ-log.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

const Navigation = () => {
	const [authorization, setAuthorization] = useState(false);

	return (
		<>
			<header className="bg-[#ffc95d]">
				<div className="header-container max-w-7xl m-auto py-10">
					<div className="header-wrapper flex justify-center items-center gap-3 flex-col md:flex-row md:justify-between md:items-center">
						<div className="header-log-wrapper flex items-center">
							<img src={Log} alt="log" />
							<p className="sections-desc header-nav-desc text-2xl ">
								Academy-tea
							</p>
						</div>
						<nav className="header-navigation text-white flex flex-wrap justify-center items-center gap-2 px-4 text-xl">
							<Link className="header-item" to="/home">
								Home
							</Link>

							<Link className="header-item" to="/FullScrenn">
								Courses
							</Link>
							<Link className="header-item" to="/FullScrenn">
								Courses
							</Link>
							<Link className="header-item" to="/FullscrnMiddle">
								PRO courses
							</Link>

							<Link className="header-item" to="/FullscrnBottom">
								Start
							</Link>

							<Link className="header-item" to="/FullscrnBottomm">
								Growing
							</Link>

							<Button
								variant="outlined"
								sx={{ padding: "0.07rem" }}
								onClick={() => setAuthorization(!authorization)}
								to="/LogIn"
								className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 duration-200 px-1 py-1 rounded-md  md:p-1"
							>
								Join
							</Button>
							<Button
								variant="outlined"
								sx={{ padding: "0.07rem" }}
								onClick={() => setAuthorization(!authorization)}
								className="btn btn-navigation text-white  bg-red-500 transition hover:bg-red-700 duration-200 px-1 py-1 rounded-md  md:p-1"
							>
								Registration
							</Button>
						</nav>
					</div>
				</div>
			</header>
			{/* {authorization && <LogIn />} */}
		</>
	);
};

export default Navigation;
