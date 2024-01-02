import {
	Instagram,
	Facebook,
	PinDrop,
	GitHub,
	AllInclusiveRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Banner.css";
import km from "../Banner/km.jpg";
const Banner = () => {
	return (
		<>
			<section data-aos="fade-left" className="sections banner__section">
				<div className="container">
					<div className="banner__content flex flex-col items-center md:flex-row justify-between ">
						<div className="banner_left flex flex-col justify-between gap-4">
							<h1 className="sections__title banner_title max-w-xs text-4xl md:text-6xl">
								Hy! I Am KOMIL MUMINOV.{" "}
							</h1>
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
							<p className="banner_desc mb-6 md:mb-0">
								I am a novice web developer.
							</p>
						</div>
						<div className="banner_center flex flex-wrap-reverse ">
							<img
								src={km}
								alt="banner"
								className="person__img mb-12 md:mb-0"
							/>
						</div>
						<div className="banner_rigt flex flex-col justify-between">
							<span className="flex flex-col items-center gap-4">
								<Link
									to="https://yandex.ru/maps/10318/dushanbe/?ll=68.732958%2C38.587896&mode=routes&rtext=~38.587973%2C68.732902&rtt=auto&ruri=~&z=18.7"
									target="_blank"
								>
									<PinDrop
										sx={{ height: "70px", width: "70px;" }}
										className="location_icon"
									/>
								</Link>
								<p className="sections__title banner_title self-center text-4xl md:text-6xl">
									TAJIKISTAN
								</p>
								<p className="sections__title banner_title self-center text-4xl md:text-6xl">
									Dushanbe
								</p>
							</span>
							<span className="flex justify-center items-center gap-2">
								<AllInclusiveRounded
									className="banner_infinity"
									sx={{ height: "100px", width: "60px" }}
								/>
								<small>0104</small>
							</span>

							<p className="banner_desc text-center">I am كميل.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
