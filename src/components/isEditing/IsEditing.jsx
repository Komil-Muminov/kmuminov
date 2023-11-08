import { TextField, Button } from "@mui/material";
const IsEditing = () => {
	return (
		<>
			<section className="sections isEditing-section bg-gray-50 rounded-xl mx-5 mb-5 p-14 ">
				<div className="isEditing-container max-w-[1280px] m-auto">
					<div className="form-wrapper flex flex-col items-center justify-center gap-5 p-5">
						<TextField
							className=" w-full md:w-1/4"
							label="Задача "
							type="search"
							onChange={(e) => console.log(e.target.value)}
						/>
						<Button variant="outlined" className="md:p-5">
							Добавить задачу
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default IsEditing;
