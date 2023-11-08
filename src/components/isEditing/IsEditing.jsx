const IsEditing = () => {
	return (
		<>
			<section className="sections isEditing-section">
				<div className="isEditing-container max-w-[1280px] m-auto">
					<div className="todoList-wrapper bg-gray-50 flex flex-col">
						<form action="#" className="todoList-form h-96">
							<input type="text" />
							<input type="nubmer" />
							<button>Добавить задачу</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default IsEditing;
