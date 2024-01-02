import { SendRounded } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const Editing = () => {
	const [user, setUser] = useState("");
	const [userObj, setUserObj] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		user &&
			setUserObj((prev) => [
				...prev,
				{
					id: uuidv4(),
					todo: user,
					isEdit: false,
				},
			]);
		setUser("");
		console.log(userObj);
	};

	const handleIsEditing = (itemId, user) => {
		setUserObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, todo: user, isEdit: !item.isEdit }
					: prev,
			),
		);
		// Ваш код здесь.
	};

	const handleSaveEdit = (itemId, user) => {
		setUserObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, todo: user, isEdit: !item.isEdit }
					: item,
			),
		);
		// Ваш код здесь.
	};

	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="editing__content">
						<div className="items_form">
							<form action="#" className="flex gap-3">
								<TextField
									id="filled-search"
									label="Search field"
									type="search"
									value={user}
									variant="filled"
									onChange={(e) => setUser(e.target.value)}
								/>
								<Button
									onClick={handleSubmit}
									variant="contained"
									color="success"
									endIcon={<SendRounded />}
								>
									Send
								</Button>
							</form>
						</div>
						<div className="editing__items">
							{userObj?.length > 0 ? (
								<>
									{userObj?.map((item) => (
										<>
											<ul className="item__list">
												<li className="item" key={item.id}>
													<h3 className="item_title">Наименование</h3>
													{item.todo}
													{item.isEdit ? (
														<>
															<TextField
																onChange={(e) => setUser(e.target.value)}
															/>
															<Button
																onClick={() => handleSaveEdit(item.id, user)}
															>
																Сохранить
															</Button>
														</>
													) : (
														<>
															<Button onClick={() => handleIsEditing(item.id)}>
																Редактировать
															</Button>
														</>
													)}
												</li>
											</ul>
										</>
									))}
								</>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Editing;
