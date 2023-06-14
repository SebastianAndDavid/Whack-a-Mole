import { useState } from "react";
import "./Components.css";
import GridPosition from "./GridPosition";
export default function Board() {
  const [position, setPosition] = useState(1);

  const [inLineStyle, setInLineStyle] = useState(null);

  function createRandomPosition() {
    setPosition(Math.floor(Math.random() * 25));
  }

  const positionArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  function changeColor() {
    setInLineStyle({ backgroundColor: "red" });
    return inLineStyle;
  }

  return (
    <>
      <button
        onClick={() => {
          createRandomPosition();
          changeColor();
        }}
      >
        Click
      </button>
      <div className="grid-container">
        {positionArray.map((x, i) => {
          // does the index match the randomPosition, then also send down inline styles to the GridPosition
          console.log("i", i);
          console.log("position", position);
          return i === position ? (
            <GridPosition key={x + i} />
          ) : (
            <GridPosition key={x + i} style={inLineStyle} />
          );
        })}
      </div>
    </>
  );
}
