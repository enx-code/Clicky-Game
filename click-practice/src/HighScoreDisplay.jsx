import React from "react";

const HighScoreDisplay = ({ highScores }) => {
  return (
    <div className="center">
      <h2>High Scores</h2>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>{`${score.playerName}: ${score.score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighScoreDisplay;
