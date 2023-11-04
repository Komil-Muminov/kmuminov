import React from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import person4 from "./FullScreen-img/fullscreen-person-4.png";
import person44 from "./FullScreen-img/fullscreen-person-4-4.png";
const FullscrnBottomm = () => {
	return (
		<>
			<section className="section bottomm-section" data-aos="fade-left">
				<div className="bottomm-container max-w-7xl m-auto">
					<div className="bottomm-aside-wrapper flex flex-wrap px-4 itemcs-center justify-center">
						<aside className="bottomm-aside-left flex flex-wrap px-4 md:w-1/2">
							<h1 className="fullscr-title">
								Start growing with our community
							</h1>
							<p className="fullscrn-paragraph block px-4 ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
							</p>
							<div className="btn-wrapper w-full mb-2 px-4">
								<Button
									className="btn btn-send-me"
									variant="contained"
									endIcon={<Send />}
									sx={{ padding: "1em", bgcolor: "#536976" }}
								>
									Написать мне
								</Button>
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
