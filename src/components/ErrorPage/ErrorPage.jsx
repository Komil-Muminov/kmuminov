const ErrorPage = () => {
	return (
		<>
			<div className="error-container max-w-[1280px] m-auto">
				<div className="errorPage-text-wrapper h-screen flex flex-col items-center justify-center">
					<h1 className="text-7xl text-red-700 font-bold">
						Уппс, страница не найдена
					</h1>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
