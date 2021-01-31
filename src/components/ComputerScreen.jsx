import react, { useEffect, useState } from "react";

const ComputerScreen = ({
	questions,
	updateScore,
	score,
	setGreen,
	setRed,
}) => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (current === 0) updateScore(0);
	}, [current]);

	const optionArr = [
		questions[current].option1,
		questions[current].option2,
		questions[current].option3,
		questions[current].option4,
	];

	const onCLickHandler = (index) => {
		if (index + 1 === questions[current].answer) {
			setGreen(true);
			setTimeout(() => {
				setGreen(false);
			}, 1000);
			updateScore(score + 1);
		} else {
			setRed(true);
			setTimeout(() => {
				setRed(false);
			}, 1000);
		}

		setCurrent((current + 1) % questions.length);
	};

	const options = optionArr.map((option, index) => {
		return (
			<div
				onClick={() => onCLickHandler(index)}
				className={`option btn rounded-pill p-3 m-3 text-white border border-3 border-warning text-center }`}
			>
				{option}
			</div>
		);
	});
	return (
		<div className="kbc correct flex-grow-1">
			<div className="question rounded-pill p-5 m-5 text-white border border-5 border-warning shadow-lg">
				<h3 className="display-6">{questions[current].question}</h3>
			</div>
			<div className="options d-flex position-relative m-5 mt-auto border border-success">
				<div className="row">
					{options[0]}
					{options[1]}
				</div>
				<div className="row position-absolute end-0">
					{options[2]}
					{options[3]}
				</div>
			</div>
		</div>
	);
};

export default ComputerScreen;
