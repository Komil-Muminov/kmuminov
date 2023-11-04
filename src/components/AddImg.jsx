import { useState } from "react";
const AddImg = () => {
	const [getImg, setGetImg] = useState([]);

	const handleGetImg = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setGetImg(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="container">
			<input type="file" className="file" onChange={handleGetImg} multiple />
			{getImg && <img src={getImg} alt="Выбранное изображение" />}
		</div>
	);
};

export default AddImg;
