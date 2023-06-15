import { useEffect, useState } from "react";
import "./Components.css";
import GridPosition from "./GridPosition";
export default function Board() {
  const [position, setPosition] = useState(null);
  const [lit, setLit] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);

  function randomLitUpTileTimeKeeper() {
    if (gameStart) {
      setLit(true);
      setTimeout(() => {
        setLit(false);
      }, 500);
    }
  }

  useEffect(() => {
    randomLitUpTileTimeKeeper();
    setPosition(Math.floor(Math.random() * 25));
  }, [lit, gameStart]);

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
