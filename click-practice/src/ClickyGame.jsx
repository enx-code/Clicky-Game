// src/ClickyGame.js
import React, { useState, useEffect } from "react";
const ClickyGame = () => {
  const [images, setImages] = useState([
    // Add your image URLs here
    import.meta.env.BASE_URL + "./images/image1.png",
    import.meta.env.BASE_URL + "./images/image2.png",
    import.meta.env.BASE_URL + "./images/image3.png",

    // ...
  ]);

  const [score, setScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  const shuffleImages = () => {
    // Implement a function to shuffle the images array
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  };

  const handleClick = (image) => {
    if (clickedImages.includes(image)) {
      // User clicked the same image again, reset the game
      setScore(0);
      setClickedImages([]);
    } else {
      // User clicked a new image, update the score and shuffle images
      setScore(score + 1);
      setClickedImages([...clickedImages, image]);
      shuffleImages();
    }
  };

  // Shuffle images when the component mounts
  useEffect(() => {
    shuffleImages();
  }, []);

  return (
    <div>
      <h1>Clicky Game</h1>
      <p>Score: {score}</p>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClickyGame;
