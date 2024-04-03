import React, { useState, useEffect } from "react";
import PlayerNameInput from "./PlayerNameInput";
import HighScoreDisplay from "./HighScoreDisplay";
import "./ClickyGames.css";

const ClickyGame = () => {

  const [playerName, setPlayerName] = useState("");
  const [images, setImages] = useState([
    import.meta.env.BASE_URL + "./image1.png",
    import.meta.env.BASE_URL + "./image2.png",
    import.meta.env.BASE_URL + "./image3.png",
    import.meta.env.BASE_URL + "./image4.png",
    import.meta.env.BASE_URL + "./image5.png",
    import.meta.env.BASE_URL + "./image6.jpeg",
    import.meta.env.BASE_URL + "./image7.jpeg",
    import.meta.env.BASE_URL + "./image8.jpeg",
    import.meta.env.BASE_URL + "./image9.jpeg",
    import.meta.env.BASE_URL + "./image10.png",
    import.meta.env.BASE_URL + "./image11.jpeg",
    import.meta.env.BASE_URL + "./image12.jpeg",
    import.meta.env.BASE_URL + "./image13.jpeg",
    import.meta.env.BASE_URL + "./image14.jpeg",
  ]);

  const [score, setScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [highScores, setHighScores] = useState([]);

  const shuffleImages = () => {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  };

  const handlePlayerSubmit = (name) => {
    setPlayerName(name);
  };

  const handleScoreSubmit = () => {
    if (playerName && score > 0) {
      const newHighScore = { playerName, score };
      setHighScores([...highScores, newHighScore]);
    }
  };

  const handleClick = (image) => {
    if (clickedImages.includes(image)) {
      handleScoreSubmit();
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);
      setClickedImages([...clickedImages, image]);
      shuffleImages();
    }
  };

  useEffect(() => {
    shuffleImages();
  }, [playerName]);

  return (
    <div className="center">
      <h1>Clicky Game</h1>
      <PlayerNameInput onSubmit={handlePlayerSubmit} />
      <p>{`Player: ${playerName}`}</p>
      <p>Score: {score}</p>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleClick(image)}
            className="clicky-image"
          />
        ))}
      </div>
      <HighScoreDisplay highScores={highScores} />
    </div>
  );
};

export default ClickyGame;
