import { useState } from "react";
import { useForm } from "react-hook-form";
import { Routes, Route } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import AcademyLog from "./img/academy-robot-4-png.png";
import PersonAccaunt from "../Personal-accaunt/PersonAccaunt";
const IsEditing = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: "onBlur" });

	const [userInput, setUserInput] = useState([]);
	const [showPersonAccaunt, setShowPersonAccaunt] = useState(false);
	const handleOnSubmit = (data) => {
		console.log(data);

		if (data.login === "komil" && data.password === "0104") {
			alert("Yo Admin ! ");
			setUserInput(
				(prev) => [
					...prev,
					{
						id: prev.length + 1,
						login: data.login,
						password: data.password,
					},
				],
				() => {
					console.log("USERINPUT", userInput);
				},
			);
			setShowPersonAccaunt(!showPersonAccaunt);
		} else {
			alert("NO");
		}
	};

	// isEditing-container max-w-7xl m-auto
	return (
		<>
			<section className="sections isEditing-section bg-gray-50 rounded-xl mx-5 mb-5 p-14 ">
				<div
					className={` ${
						showPersonAccaunt ? "hidden" : "sEditing-container max-w-7xl m-auto"
					}`}
				>
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
								label="login "
								type="search"
								{...register("login", {
									required: "Заполните поле ! ",
									minLength: {
										value: 3,
										message: "Необходимо внести минимум 3 символа",
									},
								})}
							/>
							<span className="form error login">
								<p className="text-3xl text-red-500">
									{errors?.login?.message || ""}
								</p>
							</span>

							<TextField
								className=" w-full md:w-1/4"
								label="password "
								type="search"
								{...register("password", {
									required: "Заполните поле !",
									minLength: {
										value: 3,
										message: "Необходимо внести минимум 3 символа",
									},
								})}
							/>
							<span className="form-error-message">
								<p className="text-3xl text-red-500">
									{errors?.password?.message || ""}
								</p>
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
				</div>
				{userInput?.length > 0 ? (
					<div className="userInput-wrapper">
						{userInput?.map((item) =>
							item.login === "komil" && item.password === "0104" ? (
								<>{userInput && <PersonAccaunt />}</>
							) : (
								<>{setUserInput([])}</>
							),
						)}
					</div>
				) : null}
			</section>
		</>
	);
};

export default IsEditing;
