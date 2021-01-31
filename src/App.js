import react, { useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import ScoreCard from "./components/ScoreCard";
import "./components/style.css";
const questions = [
	{
		question: "who is the founder of tesla ?",
		option1: "Elon Musk",
		option2: "Tony Stark",
		option3: "Bill Gates",
		option4: "Nikola Tesla",
		answer: 1,
	},
	{
		question: "which is the most valuable IT company in the world ?",
		option1: "Wipro",
		option2: "Infosys",
		option3: "TCS",
		option4: "CTS",
		answer: 3,
	},
	{
		question: "who is father of computer science ?",
		option1: "charles Babbage",
		option2: "Bill Gates",
		option3: "Allen turing",
		option4: "Dennis Ritchie ",
		answer: 3,
	},
];

const App = () => {
	const [score, setScore] = useState(0);
	const [green, setGreen] = useState(false);
	const [red, setRed] = useState(false);

	return (
		<main
			className={`d-flex h-100 correctResult ${
				green ? "border border-5 border-success" : ""
			} ${red ? "border border-5 border-danger" : ""}`}
		>
			<div className="flex-grow-1 correct">
				<ComputerScreen
					questions={questions}
					updateScore={setScore}
					score={score}
					setGreen={setGreen}
					setRed={setRed}
				/>
			</div>
			<div className="scores">
				<ScoreCard score={score} />
			</div>
		</main>
	);
};

/*
			
			
*/

export default App;
