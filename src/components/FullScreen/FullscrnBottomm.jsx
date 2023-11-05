import React from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import person4 from "./FullScreen-img/fullscreen-person-4.png";
import person44 from "./FullScreen-img/fullscreen-person-4-4.png";
import { Link } from "react-router-dom";
const FullscrnBottomm = () => {
	return (
		<>
			<section
				className="section bottomm-section p-5 mb-5"
				data-aos="fade-left"
			>
				<div className="bottomm-container max-w-7xl m-auto">
					<div className="bottomm-aside-wrapper flex flex-wrap px-4 itemcs-center justify-center">
						<aside className="bottomm-aside-left flex flex-wrap px-4 md:w-1/2">
							<h1 className="fullscr-title">
								Start growing with our community
							</h1>
							<p className="fullscrn-paragraph block px-4 py-4 ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
							</p>
							<div className="btn-wrapper w-full mb-5 p-8 md:p-4">
								<Link
									target="_blank"
									className="btn btn-send-me outline bg-[#536976] text-white mb-6 p-6 md:p-4"
									to="https://docs.google.com/forms/d/17Hwj7dfvi4XuXbpV-d5uisuFtWEN_08VKU8xyQYR1TU/edit"
								>
									Написать нам -
									<Send sx={{ paddingLeft: "5px" }} />
								</Link>
							</div>
						</aside>

						<aside className="bottomm-aside-right flex flex-wrap md:w-1/2 relative">
							<img
								src={person44}
								alt="person-thinking"
								className="flex p-0 m-0 bg-slate-300 rounded-3xl h-20 person-thinking-icon  "
							/>
							<img
								src={person4}
								alt="person-4"
								className="bottom-right-aside-img flex flex-wrap max-w-[327px] h-[320px] md:w-1/2 md:max-w-[578px] md:h-[400px]"
							/>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

export default FullscrnBottomm;
