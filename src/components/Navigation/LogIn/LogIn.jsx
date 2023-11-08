import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "aos/dist/aos.css";

import AcademyLog from "./img/academy-robot-4-png.png";
const LogIn = () => {
	const { register, handleSubmit } = useForm({ mode: "onBlur" });

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
		
			<section className="section log-in bg-gray-50 rounded-xl m-5 p-5">
				<div className="logIn-container max-w-[1280px] m-auto ">
					<h2 className="header-title text-center">Авторизация</h2>
					<div className="header-lot-wrapper flex items-center justify-center px-4  ">
						<a href="#" className=" cursor-pointer">
							<img
								src={AcademyLog}
								alt="header-log"
								className="header-log-img h-60 w-60 md:h-64 md:w-64"
							/>
						</a>
					</div>
					<div className="header-form-wrapper flex flex-col p-5">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="log-in-wrapper  flex flex-col items-center justify-center gap-5"
						>
							<TextField
								label="Логин"
								placeholder="Введите логин"
								className="md:w-1/5"
								{...register("login", {
									required: "Заполните поле е ма е",
									minLength: 2,
								})}
							/>
							<TextField
								label="Пароль"
								placeholder="Введите пароль"
								className="md:w-1/5"
								{...register("password", {
									required: "Заполните поле е ма е",
									minLength: 2,
								})}
							/>

							<Button variant="outlined" className="w-1/6">
								Войти
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default LogIn;
