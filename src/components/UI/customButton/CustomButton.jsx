const CustomButton = ({ onClick, buttonText, id }) => {
	return (
		<div>
			<button onClick={onClick}>{buttonText}</button>
		</div>
	);
};

export default CustomButton;
