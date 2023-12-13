import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// -----------------------------------------------------------------
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Banner from "./components/Banner/Banner";
// import Content from "./components/Content/Content";
// import Footer from "./components/Footer/Footer";

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
				<Route
					path="*"
					element={
						<div data-aos="fade-right">
							<ErrorPage />
						</div>
					}
				/>
				<Route path="/" element={<Navigate to="/Home" />} />
				<Route
					path="/Home"
					element={
						<div data-aos="fade-right">
							<Home />
						</div>
					}
				/>
				<Route
					path="/Banner"
					element={
						<div data-aos="fade-right">
							<Banner />
						</div>
					}
				/>
				{/* <Route
					path="/Content"
					element={
						<div data-aos="fade-right">
							<Content />
						</div>
					}
				/> */}
			</Routes>
			{/* <Footer /> */}
		</>
	);
}

export default App;
