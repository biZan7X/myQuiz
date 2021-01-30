import react, { useState } from "react";

const ComputerScreen = ({ questions, updateScore, score }) => {
	const [current, setCurrent] = useState(0);

	const optionArr = [
		questions[current].option1,
		questions[current].option2,
		questions[current].option3,
		questions[current].option4,
	];

	const onCLickHandler = (index) => {
		if (current === 0) updateScore(0);

		if (index + 1 === questions[current].answer) {
			updateScore(score + 1);
			alert("correct answer , the score is : " + ++score);
		} else alert("wrong answer idiot! , the score is : " + score);

		setCurrent((current + 1) % questions.length);
	};

	const options = optionArr.map((option, index) => {
		return (
			<div
				onClick={() => onCLickHandler(index)}
				className="option btn bg-info rounded-pill p-3 m-3 text-white border border-success text-center"
			>
				{option}
			</div>
		);
	});
	return (
		<div className="container border border-danger flex-grow-1">
			<div className="question bg-info rounded-pill p-5 m-5 text-white border border-warning shadow-lg">
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
