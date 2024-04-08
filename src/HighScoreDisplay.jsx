import React from "react";
import "./ClickyGames.css";

const HighScoreDisplay = ({ highScores }) => {
  return (
    <div className="center">
      <h2>High Scores</h2>
      <ul className="noDot">
        {highScores.map((score, index) => (
          <li key={index}>{`${score.playerName}: ${score.score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighScoreDisplay;
