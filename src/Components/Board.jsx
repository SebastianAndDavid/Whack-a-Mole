import { useEffect, useState } from "react";
import "./Components.css";
import GridPosition from "./GridPosition";
export default function Board() {
  const [position, setPosition] = useState(null);
  const [lit, setLit] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);
  const [randomTime, setRandomTime] = useState(1000);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    setRandomTime(Math.floor(Math.random() * (max - min) + min));
  }

  // console.log(getRandomInt(500, 3000));

  function randomLitUpTileTimeKeeper() {
    if (gameStart) {
      setLit(true);
      setRandomTime(getRandomInt(2000, 5000));
    }
  }

  useEffect(() => {
    if (lit) {
      const timeoutId = setTimeout(() => {
        setLit(false);
      }, randomTime);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [lit, randomTime]);

  useEffect(() => {
    randomLitUpTileTimeKeeper();
    setPosition(Math.floor(Math.random() * 25));
  }, [gameStart]);

  return (
    <>
      <button
        onClick={() => {
          setGameStart(true);
        }}
      >
        Start the game
      </button>
      <button
        onClick={() => {
          setGameStart(false);
          setScore(0);
        }}
      >
        Stop the game
      </button>
      Your score: {score}
      <div className="grid-container">
        {Array.from({ length: 25 }, (_, i) =>
          i === position ? (
            <GridPosition
              key={i}
              style={{ backgroundColor: "red" }}
              setScore={setScore}
              score={score}
              i={i}
              position={position}
            />
          ) : (
            <GridPosition
              key={i}
              setScore={setScore}
              score={score}
              i={i}
              position={position}
            />
          )
        )}
      </div>
    </>
  );
}
