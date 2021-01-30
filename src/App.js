import react, { useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import ScoreCard from "./components/ScoreCard";

const questions = [
	{
		question: "who is the founder of tesla?",
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
		question: "who is father of computer science",
		option1: "charles Babbage",
		option2: "Bill Gates",
		option3: "Allen turing",
		option4: "Dennis Ritchie ",
		answer: 3,
	},
];

const App = () => {
	const [score, setScore] = useState(0);
	return (
		<div className="container border border-primary d-flex">
			<div className="flex-grow-1">
				<ComputerScreen
					questions={questions}
					updateScore={setScore}
					score={score}
				/>
			</div>
			<div className="scores">
				<ScoreCard score={score} />
			</div>
		</div>
	);
};

/*
			
			
*/

export default App;
