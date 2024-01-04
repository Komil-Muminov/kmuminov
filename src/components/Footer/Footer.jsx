import { Instagram, Facebook, GitHub } from "@mui/icons-material";

import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
	return (
		<>
			<footer className="footer h-auto md:h-[23vh]">
				<div className="container">
					<div className="footer__content flex  gap-3 justify-between flex-wrap md:flex-row md:justify-between">
						<div className="footer_left flex flex-col gap-4  footer__offset ">
							<h2>Таджикистан.</h2>
							<p>Душанбе.</p>
							<p>Испечак 2, м8.</p>
						</div>
						<div className="footer_center flex flex-col gap-4  footer__offset">
							<h2>Tajikistan</h2>
							<p>Dushanbe</p>
							<p>Ispechak 2</p>
						</div>

						<div className="footer_right flex flex-col gap-4 footer__offset">
							<a className="right-icon">
								<Instagram target="_blank" href="#" />
							</a>
							<Link className="right-icon">
								<Facebook target="_blank" href="#" />
							</Link>
							<Link className="right-icon">
								<GitHub target="_blank" href="#" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
