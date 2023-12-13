import { Instagram, Facebook } from "@mui/icons-material";
import "./Banner.css";
import km from "../Banner/km.jpg";
const Banner = () => {
	return (
		<>
			<section data-aos="fade-left" className="sections banner__section">
				<div className="container">
					<div className="banner__content flex flex-col flex-wrap md:flex-row md:justify-between items-center">
						<div className="banner_left">
							<h1 className="sections__title banner_title">
								Hy! I Am KOMIL MUMINOV.{" "}
							</h1>
							<p className="sections__desc">I am a novice web developer.</p>
							<article className="social__icons">
								<a href="#">
									<Instagram />
									<Facebook />
								</a>
							</article>
						</div>
						<div className="banner_center flex flex-wrap flex-col ">
							<img src={km} alt="banner" className="person__img" />
						</div>
						<div className="banner_right">
							<p className="sections__title banner_title">
								Lorem, ipsum dolor.
							</p>
							<p className="sections__desc">I am a novice web developer.</p>
							<p className="banner_desc">I am KOMIL MUMINOV..</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
