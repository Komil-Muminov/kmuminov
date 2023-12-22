import { Instagram, Facebook, PinDrop, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Banner.css";
import km from "../Banner/km.jpg";
const Banner = () => {
	return (
		<>
			<section data-aos="fade-left" className="sections banner__section">
				<div className="container">
					<div className="banner__content flex flex-col md:flex-row md:justify-between ">
						<div className="banner_left">
							<h1 className="sections__title banner_title">
								Hy! I Am KOMIL MUMINOV.{" "}
							</h1>
							<p className="banner_desc">I am a novice web developer.</p>
							<article className="social__icons mb-4 md:mb-0">
								<Link to="https://www.instagram.com/komilff" target="_blank">
									<Instagram
										className="social__icon"
										sx={{ height: "50px", width: "50px;" }}
									/>
								</Link>
								<Link
									to="https://ru-ru.facebook.com/public/Комил-Муминов"
									target="_blank"
								>
									<Facebook
										className="social__icon"
										sx={{ height: "50px", width: "50px;" }}
									/>
								</Link>

								<Link to="https://github.com/Komil-Muminov" target="_blank">
									<GitHub
										className="social__icon"
										sx={{ height: "50px", width: "50px;" }}
									/>
								</Link>
							</article>
						</div>
						<div className="banner_center flex flex-wrap-reverse ">
							<img src={km} alt="banner" className="person__img" />
						</div>
						<div className="banner_right flex flex-col">
							<span className="flex flex-col items-center gap-4">
								<Link
									to="https://yandex.ru/maps/10318/dushanbe/?ll=68.732958%2C38.587896&mode=routes&rtext=~38.587973%2C68.732902&rtt=auto&ruri=~&z=18.7"
									target="_blank"
								>
									<PinDrop
										sx={{ height: "40px", width: "40px;" }}
										className="location_icon"
									/>
								</Link>
								<p className="sections__title banner_title">TAJIKISTAN</p>
							</span>
							<p className="sections__title">Dushanbe</p>
							<p className="banner_desc">I am كميل.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
