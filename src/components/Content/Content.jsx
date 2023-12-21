import LeonardoAi from "./LeonardoAi.jpg";
import "./Content.css";
const Content = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<h1 className="sections__title content_title text-center">
						PAST LIVES
					</h1>
					<div className="lives__content flex flex-wrap-reverse">
						<p className="sections__desc lives_desc md:w-1/2">
							Once there was a remarkable story about an unbreakable bond.
							However, at some point, this bond, which seemed eternal, reached
							its end, ushering in a new chapter. This transition became a
							critical juncture for our tale, and it moved on to the next phase
							of its existence, leaving the past behind. The new chapter brings
							fresh opportunities, but memories of the past will always remain
							in their hearts.And the story is called as “Lalila.”
						</p>
						<img src={LeonardoAi} alt="leonardo_ai" className="md:w-1/2" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
