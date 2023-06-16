// eslint-disable-next-line react/prop-types
export default function GridPosition({ style, setScore, score, i, position }) {
  function incrementScore() {
    if (i === position) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }
  return (
    <div
      style={style}
      onClick={() => {
        incrementScore();
      }}
    ></div>
  );
}
