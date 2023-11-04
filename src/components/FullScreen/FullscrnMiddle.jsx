import person2 from "./FullScreen-img/fullscreen-person-2.png";
const FullscrnMiddle = () => {
	return (
		<>
			<section className="section middle-section mb-5" data-aos="fade-left">
				<div className="flscrn-middle-container max-w-7xl m-auto">
					<div className="middle-middle-wrapper flex flex-wrap justify-center items-center px-4">
						<aside className="left-aside-bottom flex flex-wrap px-4 md:w-1/2">
							<img
								src={person2}
								alt="left-aside-middle-teacher"
								className="left-aside-bottom-img max-w-[327x] h-[327px] md:max-w-[478px] md:h-[438px] "
							/>
						</aside>
						<aside className="right-aside-middle flex flex-wrap px-4  md:w-1/2">
							<h2 className=" fullscr-title middle-title">Welcome !</h2>
							<ul className="right-aside-middle-list flex flex-wrap">
								<li className="list-item">Выберите ваш любимый курс</li>
								<li className="list-item">
									Развивайте ваши навыки вместе с нами прямо сейчас
								</li>
								<li className="list-item">Освойте силу знаний с нами</li>
							</ul>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

export default FullscrnMiddle;
