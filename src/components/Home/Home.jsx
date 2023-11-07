import Navigation from "../Navigation/Navigation";
import FullScrenn from "../FullScreen/FullScrenn";
import FullscrnMiddle from "../FullScreen/FullscrnMiddle";
import FillscrnBottom from "../FullScreen/FullscrnBottom";
import FillscrnBottomm from "../FullScreen/FullscrnBottomm";
const Home = () => {
	return (
		<>
			<section className="home" data-aos="fade-left">
				<div className="home-container ">
					<Navigation />
					<FullScrenn />
					<FullscrnMiddle />
					<FillscrnBottom />
					<FillscrnBottomm />
				</div>
			</section>
		</>
	);
};

export default Home;
