// import LeonardoAi from "./LeonardoAi.jpg";
import Leonardo from "./LeonardoWebp.webp";
import "./Content.css";
import { Tooltip } from "@mui/material";
const Content = () => {
	return (
		<>
			<section data-aos="fade-right" className="sections">
				<div className="container">
					<h1 className="sections__title content_title text-center mb-10 md:mb-14">
						PAST LIVES
					</h1>
					<div className="lives__content flex flex-wrap-reverse">
						<Tooltip
							title="Комил Муминов"
							disableInteractive
							sx={{ padding: "10px", fontSize: "40px" }}
						>
							<p className="sections__desc lives_desc md:w-1/2">
								Once upon a time, in a distant world, an enchanting tale of an
								unbreakable bond began to unfold. In this magical narrative, two
								beings, intertwined as if by fate, found each other in a vast
								universe. Their connection was something more significant than
								mere ties; it was like an invisible thread uniting their hearts.
								They experienced much together – soaring highs and plummeting
								lows, joys, and challenges. Their bond seemed so strong that
								nothing appeared capable of shattering it. One of the quotes
								woven into this narrative proclaimed, There are no irreplaceable
								ones, but there are unique ones, reminding them of the
								uniqueness of each moment. However, as is often the case in
								stories, even the strongest bonds are sometimes tested. In
								pursuit of their dreams, they faced difficulties, but every
								overcome obstacle strengthened their connection. At a certain
								point, their unbreakable bond reached its conclusion. This
								pivotal moment became a significant turning point in their
								destiny. Another quote served as a reminder: In the pursuit of a
								dream, do not lose people, casting a reproachful gaze at those
								they might have lost in the quest for external achievements.
								From this moment, our tale transitions into the next phase of
								existence, where new opportunities and unexplored perspectives
								unfold. They leave the past behind, yet the memories of what was
								remain forever in their hearts. This story has earned its name –
								Lalila. A word that becomes a symbol of their journey, reminding
								us that in the most unexpected endings, new beginnings emerge.
							</p>
						</Tooltip>
						<img
							src={Leonardo}
							alt="leonardo_ai"
							className=" rounded-xl md:w-1/2 md:rounded-2xl"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
