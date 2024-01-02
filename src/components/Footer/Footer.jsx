import { Instagram, Facebook, GitHub } from "@mui/icons-material";

import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer__content flex justify-between">
						<div className="footer_left flex flex-col gap-4  footer__offset ">
							<Link target="_blank" href="#" className="left-text">
								FOOTER
							</Link>
							<Link target="_blank" href="#" className="left-text">
								FOOTER
							</Link>
							<Link target="_blank" href="#" className="left-text">
								FOOTER
							</Link>
						</div>
						<div className="footer_center flex flex-col gap-4  footer__offset">
							<Link target="_blank" href="#" className="center-link">
								FOOTER
							</Link>
							<Link target="_blank" href="#" className="center-link">
								FOOTER
							</Link>
							<Link target="_blank" href="#" className="center-link">
								FOOTER
							</Link>
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
