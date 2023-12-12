import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
	return (
		<>
			<header className="nav__section">
				<nav className="nav">
					<div className="container flex items-center flex-wrap justify-around">
						<a href="#" className="log__text">
							K.MUMINOV
						</a>
						<Link className="nav__item" to="/Home">
							(Home)
						</Link>
						<Link className="nav__item" to="/Banner">
							BANNER
						</Link>
						<Link className="nav__item" to="/Projects">
							Projects
						</Link>
						<Link className="nav__item" to="/Contacts">
							Contact
						</Link>
						<a href="#" className="btn download_cv">
							Скачать
						</a>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
