import react from "react";

const questions = [
	{
		question: "who is the founder of tesla?",
		option1: "Elon Musk",
		option2: "Tony Stark",
		option3: "Bill Gates",
		option4: "Nikola Tesla",
	},
	{
		question: "which is the most valuable IT company in the world ?",
		option1: "Wipro",
		option2: "Infosys",
		option3: "TCS",
		option4: "CTS",
	},
	{
		question: "who is father of computer science",
		option1: "charles Babbage",
		option2: "Bill Gates",
		option3: "Allen turing",
		option4: "Dennis Ritchie ",
	},
];

const App = () => {
	return <div className="container">{questions[0].question}</div>;
};

export default App;
