import { Instagram, Facebook } from "@mui/icons-material";
const Banner = () => {
	return (
		<>
			<section className="sections banner__section">
				<div className="container">
					<div className="banner__content flex justify-between items-center">
						<div className="banner_left">
							<h1 className="sections__title banner_title">
								Hy! I Am KOMIL MUMINOV.{" "}
							</h1>
							<p className="sections__desc">I am a novice web developer.</p>
							<article className="social__icons">
								<Instagram />
								<Facebook />
							</article>
						</div>
						<div className="banner_center">
							<img src="src\components\Banner\Anush_goodQuality.png" alt="" />
						</div>
						<div className="banner_right">
							<p className="sections__title banner_title">
								Lorem, ipsum dolor.
							</p>
							<p className="sections__desc">I am a novice web developer.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
