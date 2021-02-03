import react, { useState } from "react";
import ComputerScreen from "./components/ComputerScreen";
import FinalScore from "./components/FinalScore";
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
	{
		question: "who is bizan?",
		option1: "spider man",
		option2: "thor",
		option3: "iron man",
		option4: "Biswanath ",
		answer: 4,
	},
	{
		question: "which is the most demanded language in the world ?",
		option1: "Python",
		option2: "JavaScript",
		option3: "Java",
		option4: "C++",
		answer: 2,
	},
];

const App = () => {
	const [score, setScore] = useState(0);
	const [green, setGreen] = useState(false);
	const [red, setRed] = useState(false);
	const [completed, setCompleted] = useState(false);

	return (
		<main
			className={`h-100 ${green ? "correctResult" : ""} ${
				red ? "wrongResult" : ""
			}`}
		>
			{!completed ? (
				<div className="main-screen d-flex h-100">
					<div className="flex-grow-1 ">
						<ComputerScreen
							questions={questions}
							updateScore={setScore}
							score={score}
							setGreen={setGreen}
							setRed={setRed}
							setCompleted={setCompleted}
						/>
					</div>
					<div className="scores">
						<ScoreCard score={score} />
					</div>
				</div>
			) : (
				<FinalScore
					score={score}
					totalScore={questions.length}
					setCompleted={setCompleted}
				/>
			)}
		</main>
	);
};
export default App;
