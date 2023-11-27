import "./Navigation.css";
import navlog from "./nav-image/academy-tea-log-noBg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

const Navigation = () => {
	const [authorization, setAuthorization] = useState(false);

	return (
		<>
			<header className="bg-[#ffc95d] mb-5">
				<div className="header-container max-w-7xl m-auto py-10">
					<div className="header-wrapper flex  flex-col md:flex-row md:justify-between md:items-center">
						<div className="header-log-wrapper flex items-center gap-3 justify-center">
							<Link to="/">
								<img src={navlog} alt="log" className=" h-32" />
							</Link>
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

							<Link className="header-item" to="/IsEditing">
								isEditing
							</Link>

							<Link
								onClick={() => setAuthorization(!authorization)}
								to="/LogIn"
								className="btn btn-navigation text-white px-1 md:p-1"
							>
								Join
							</Link>
							{/* <Button onClick={() => setAuthorization(!authorization)}>
								Registration
							</Button> */}
						</nav>
					</div>
				</div>
			</header>
			{/* {authorization && <LogIn />} */}
		</>
	);
};

export default Navigation;
