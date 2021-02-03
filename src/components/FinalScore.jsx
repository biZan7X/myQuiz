import react, { useEffect, useRef } from "react";
import gameEnd from "../sounds/gameEnd.mp3";

const FinalScore = ({ setCompleted, score, totalScore }) => {
	const musicRef = useRef();

	useEffect(() => {
		musicRef.current.play();
	}, []);

	const onClickHandler = () => {
		setCompleted(false);
	};
	return (
		<div className="final-section d-flex flex-column justify-content-center align-items-center">
			<h1 className="top-10"> : Game Over :</h1>
			<h1 className="display-4">
				Your Final Score is {score} out of {totalScore}
			</h1>

			<h3 onClick={onClickHandler} className="continue btn">
				click here to play again
			</h3>
			<audio ref={musicRef} src={gameEnd}></audio>
		</div>
	);
};

export default FinalScore;
