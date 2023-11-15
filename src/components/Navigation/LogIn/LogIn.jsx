import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import AcademyLog from "./img/academy-robot-4-png.png";
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

		if (data.login === "komil" && data.password === "komil") {
			alert("Yo Admin ! ");
		} else {
			alert("NO");
		}
	};
	return (
		<>
			<section className="sections isEditing-section bg-gray-50 rounded-xl mx-5 mb-5 p-14 ">
				<div className="isEditing-container max-w-[1280px] m-auto">
					<div className="header-lot-wrapper flex items-center justify-center px-4 ">
						{" "}
						<a href="#" className=" cursor-pointer">
							{" "}
							<img
								src={AcademyLog}
								alt="header-log"
								className="header-log-img h-60 w-60 md:h-64 md:w-64"
							/>{" "}
						</a>{" "}
					</div>
					<div className="form-wrapper ">
						<form
							onSubmit={handleSubmit(handleOnSubmit)}
							className="isEditing-form form-wrapper flex flex-col items-center justify-center gap-5 p-5"
						>
							<TextField
								className=" w-full md:w-1/4"
								label="Login "
								type="search"
								{...register("login", {
									required: "Заполните поле ",
									minLength: {
										value: 3,
										message: "Необходимо внести минимум 3 символа",
									},
								})}
							/>
							<span className="form error login">
								<p>{errors?.login?.message || "Ошибка"}</p>
							</span>

							<TextField
								className=" w-full md:w-1/4"
								label="password "
								type="search"
								{...register("password", {
									required: "Заполните поле ",
									minLength: {
										value: 3,
										message: "Необходимо внести минимум 3 символа",
									},
								})}
							/>
							<span className="form-error-message">
								<p>{errors?.password?.message || "Ошибка"}</p>
							</span>
							<Button
								sx={{ px: "4em" }}
								onClick={handleSubmit(handleOnSubmit)}
								variant="outlined"
								className="md:p-5"
							>
								Войти
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
