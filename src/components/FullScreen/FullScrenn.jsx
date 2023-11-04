import "./FullScreen.css";
import person from "./FullScreen-img/fullscreen-person.jpg";

import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
const FullScrenn = () => {
	return (
		<>
			<section className="section fullscrn-section mb-5" data-aos="fade-left">
				<div className="fullScreen-container max-w-7xl m-auto ">
					{/* Top fullscrn */}
					<div className="fullscr-top-wrapper flex flex-wrap justify-center items-center">
						<aside className="left-aside flex flex-wrap md:w-1/2 px-4">
							<h1 className="fullscr-title">Academy-tea</h1>
							<p className="left-top-aside-paragraph mb-5">
								Добро пожаловать в <strong>academy-tea</strong>, место, где
								рождаются настоящие феномены! Наша команда стремится вдохновить
								и подготовить вас для достижения невероятных успехов в вашей
								области. Учиться в Phenomen Team - значит погрузиться в
								уникальную среду, где инновации и креативность ценятся превыше
								всего. Наша цель - развивать в вас не только знания и навыки, но
								и способность видеть возможности там, где другие их не замечают.
								В Phenomen Team, мы верим в ваш потенциал и готовы поддержать
								вас на пути к достижению выдающихся результатов. Присоединяйтесь
								к нам и станьте частью команды феноменов!
							</p>
							<div className="btn btn-send-wrapper">
								<Button
									variant="contained"
									endIcon={<Send />}
									sx={{ bgcolor: "#536976", padding: "1em" }}
								>
									Написать нам
								</Button>
							</div>
						</aside>
						<aside className="right-aside flex flex-wrap md:w-1/2 px-4">
							<img
								src={person}
								alt="person"
								className="aside-right-img max-w-[327px] h-[327px] md:max-w-[487px] md:h-[487px] "
							/>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

export default FullScrenn;
