import react from "react";

const ScoreCard = ({ score }) => {
	return (
		<div className="score-board container position-relative  border border-warning border-4 rounded">
			<div className="random display-6 text-warning">Score Board</div>
			<div className="score align-middle display-1 position-absolute top-50 start-50 translate-middle">
				<div className="score-display bg-warning p-5 rounded-circle">
					{score}
				</div>
			</div>
		</div>
	);
};

export default ScoreCard;
