import React, { useState } from "react";

const PlayerNameInput = ({ onSubmit }) => {
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim() !== "") {
      onSubmit(playerName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="center">
      <label>
        Enter Your Name:
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerNameInput;
