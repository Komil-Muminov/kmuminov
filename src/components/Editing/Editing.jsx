// import React from "react";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// const Editing = () => {
// 	const [userInput, setUserInput] = React.useState("");
// 	const [userObj, setUserObj] = React.useState([]);
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setUserObj((prev) => [
// 			...prev,
// 			{ id: uuidv4(), todo: userInput, isEditing: false },
// 		]);
// 		console.log(userObj);
// 		setUserInput("");
// 	};

// 	const handleIsEditing = (itemId) => {
// 		setUserObj((prev) =>
// 			prev.map((item) =>
// 				item.id === itemId
// 					? {
// 							...item,
// 							isEditing: !item.isEditing,
// 					  }
// 					: item,
// 			),
// 		);
// 	};

// 	const hanldeIsEditinSave = (itemId, userInput) => {
// 		setUserObj((prev) =>
// 			prev.map((item) =>
// 				item.id === itemId
// 					? { ...item, todo: userInput, isEditing: !item.isEditing }
// 					: item,
// 			),
// 		);
// 		// Ваш код здесь.
// 	};
// 	return (
// 		<>
// 			<section className="isEditing-section">
// 				<div className="isEditing-container">
// 					<div className="items-wrapper">
// 						<div className="isEditing-form-wrappper">
// 							<form onSubmit={handleSubmit} className="isEditing-form">
// 								<input
// 									type="text"
// 									className="isEditing-input bg-gray-400"
// 									value={userInput}
// 									onChange={(e) => setUserInput(e.target.value)}
// 								/>
// 								<button>
// 									<Link to="https://docs.google.com/forms/d/17Hwj7dfvi4XuXbpV-d5uisuFtWEN_08VKU8xyQYR1TU/edit">
// 										Отправить
// 									</Link>
// 								</button>
// 							</form>
// 						</div>
// 						<div className="items-list-wrapper">
// 							{userObj.map((item) => (
// 								<div className="item-wrapper">
// 									<ul className="list">
// 										<li className="item">
// 											<h2>Наименование задачи:{item.todo}</h2>
// 										</li>
// 									</ul>
// 									{item.isEditing ? (
// 										<>
// 											<form
// 												onSubmit={() => hanldeIsEditinSave(item.id, userInput)}
// 											>
// 												<input
// 													type="text"
// 													className="isEditing-input"
// 													placeholder={item.todo}
// 													onChange={(e) => setUserInput(e.target.value)}
// 												/>
// 												<button className="btn isEditing-save">
// 													Сохранить
// 												</button>
// 											</form>
// 										</>
// 									) : (
// 										<>
// 											<button onClick={() => handleIsEditing(item.id)}>
// 												Редактировать
// 											</button>
// 										</>
// 									)}
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default Editing;
