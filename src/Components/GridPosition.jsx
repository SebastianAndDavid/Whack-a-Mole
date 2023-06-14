// eslint-disable-next-line react/prop-types
export default function GridPosition({ style, setScore, score, i, position }) {
  function incrementScore() {
    if (i === position) {
      setScore(score++);
    }
  }
  return (
    <div
      style={style}
      onClick={() => {
        incrementScore();
        console.log("clicking");
      }}
    >
      Hi
    </div>
  );
}
