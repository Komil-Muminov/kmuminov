import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import "aos/dist/aos.css";

const LogIn = () => {
	const { register, handleSubmit } = useForm({ mode: "onBlur" });

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<section className="section log-in">
				<div className="logIn-container max-w-[1280px] m-auto p-5 ">
					<h2 className="header-title text-center">Авторизация</h2>
					<div className="header-lot-wrapper flex items-center justify-center">
						<img
							src="src\components\Navigation\LogIn\img\academy-robot-png.png"
							alt="header-log"
							className="header-log-img"
						/>
					</div>
					<div className="header-form-wrapper flex flex-col">
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
