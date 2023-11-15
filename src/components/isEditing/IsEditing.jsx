import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
const IsEditing = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onBlur" });

	const [userInput, setUserInput] = useState([]);
	const handleOnSubmit = (data) => {
		console.log(data);
		setUserInput(data);
	};
	return (
		<>
			<section className="sections isEditing-section bg-gray-50 rounded-xl mx-5 mb-5 p-14 ">
				<div className="isEditing-container max-w-[1280px] m-auto">
					<div className="form-wrapper ">
						<form
							onSubmit={handleSubmit(handleOnSubmit)}
							className="isEditing-form form-wrapper flex flex-col items-center justify-center gap-5 p-5"
						>
							<TextField
								className=" w-full md:w-1/4"
								label="Задача "
								type="search"
								{...register("todo", {
									required: "Заполните поле ",
									minLength: {
										value: 3,
										message: "Необходимо внести минимум 3 символа",
									},
								})}
							/>
							<span className="form-error-message">
								{errors?.todo?.message || ""}
							</span>
							<Button
								onClick={handleSubmit(handleOnSubmit)}
								variant="outlined"
								className="md:p-5"
							>
								Добавить задачу
							</Button>
						</form>
					</div>
					<div className="items-wrapper"></div>
				</div>
			</section>
		</>
	);
};

export default IsEditing;
