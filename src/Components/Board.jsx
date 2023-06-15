import { useEffect, useState } from "react";
import "./Components.css";
import GridPosition from "./GridPosition";
export default function Board() {
  const [position, setPosition] = useState(null);
  const [lit, setLit] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);
  // function createRandomPosition() {
  //   setPosition(Math.floor(Math.random() * 25));
  // }

  const positionArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  // function changeColor() {
  //   setInLineStyle({ backgroundColor: "red" });
  //   return inLineStyle;
  // }

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
        {positionArray.map((x, i) => {
          // does the index match the randomPosition, then also send down inline styles to the GridPosition
          // console.log("i", i);
          // console.log("position", position);
          return i === position ? (
            <GridPosition
              key={x + i}
              style={{ backgroundColor: "red" }}
              setScore={setScore}
              score={score}
              i={i}
              position={position}
            />
          ) : (
            <GridPosition
              key={x + i}
              setScore={setScore}
              score={score}
              i={i}
              position={position}
            />
          );
          // const inLineStyle = i === position ? { backgroundColor: "red" } : {};
          // return (
          //   <GridPosition
          //     key={x + i}
          //     style={inLineStyle}
          //     setScore={setScore}
          //     score={score}
          //     i={i}
          //     position={position}
          //   />
          // );
        })}
      </div>
    </>
  );
}
