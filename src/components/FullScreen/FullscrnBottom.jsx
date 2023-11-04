import React from "react";
import person3 from "./FullScreen-img/fullscreen-person-3.png";
const FullscrnBottom = () => {
	return (
		<>
			<section className="section bottom-section mb-5" data-aos="fade-left">
				<div className="bottom-container max-w-7xl m-auto">
					<div className="bottom-asides-wrapper flex flex-wrap justify-center items-center px-4">
						<aside className="bottom left-aside flex flex-wrap md:w-1/2">
							<h2 className="fullscr-title bottom-aside-title">
								Start learning by creating free account and get register
							</h2>
						</aside>
						<aside className="bottom-right-aside flex flex-wrap md:w-1/2">
							<img
								src={person3}
								alt="bottom-img"
								className="bottom-right-aside-img flex flex-wrap max-w-[327px] h-[320px] md:w-1/2 md:max-w-[478px] md:h-[400px]"
							/>
						</aside>
						<p className="text-gray-600">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
							sequi temporibus libero accusantium placeat suscipit tempore amet
							in eum nemo aut consequatur doloribus quae, sapiente perspiciatis
							maxime impedit voluptatum excepturi.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default FullscrnBottom;
