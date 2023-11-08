import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// -----------------------------------------------------------------
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import FullScrenn from "./components/FullScreen/FullScrenn";
import FullscrnMiddle from "./components/FullScreen/FullscrnMiddle";
import FullscrnBottom from "./components/FullScreen/FullscrnBottom";
import FullscrnBottomm from "./components/FullScreen/FullscrnBottomm";
import Footer from "./components/Footer/Footer";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import LogIn from "./components/Navigation/LogIn/LogIn";
import IsEditing from "./components/isEditing/IsEditing";

function App() {
	useEffect(() => {
		AOS.init({
			delay: 300,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			{/* <Editing /> */}

			<Navigation />
			<Routes>
				<Route path="*" element={<ErrorPage />} />
				<Route path="/" element={<Navigate to="/Home" />} />
				<Route
					path="/Home"
					element={
						<div data-aos="fade-left">
							<Home />
						</div>
					}
				/>

				<Route
					path="/FullScrenn"
					element={
						<div data-aos="fade-right">
							<FullScrenn />
						</div>
					}
				/>

				<Route
					path="/FullscrnMiddle"
					element={
						<div data-aos="fade-left">
							<FullscrnMiddle />
						</div>
					}
				/>
				<Route
					path="/FullscrnBottom"
					element={
						<div data-aos="fade-right">
							<FullscrnBottom />
						</div>
					}
				/>

				<Route
					path="/FullscrnBottomm"
					element={
						<div data-aos="fade-right">
							<FullscrnBottomm />
						</div>
					}
				/>

				<Route
					path="/LogIn"
					element={
						<div data-aos="fade-right">
							<LogIn />
						</div>
					}
				/>

				<Route
					path="/IsEditing"
					element={
						<div data-aos="fade-right">
							<IsEditing />
						</div>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
