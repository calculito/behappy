import React from "react";
import Timer from "./Timer";
import BreathIn from "./images/breathin.png";
import BreathOut from "./images/breathout.png";
import StopBreath from "./images/stopbreath.png";
export default function Breath({ onGridClick }) {
  const time = [4, 7, 8];
  const [exercise, setExercise] = React.useState(0);
  const [counter, setCounter] = React.useState(5);

  const description = [
    "Sit or lie flat in a comfortable position, breath out - start in ",
    "breathe in quietly through the nose ",
    "hold the breath ",
    "exhale forcefully through the mouth, pursing the lips and making a 'whoosh' sound ",
  ];
  const images = {
    0: BreathOut,
    1: BreathIn,
    2: StopBreath,
    3: BreathOut,
  };
  React.useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : change();
    return () => clearInterval(timer);
  }, [counter]);

  const change = () => {
    exercise < 3
      ? setExercise(() => setExercise(exercise + 1))
      : setExercise(() => setExercise(0));
    setCounter(() => setCounter(time[exercise]));
  };

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="containerColumn">
        <img
          key={images[exercise]}
          className="bigPictureBreath"
          src={images[exercise]}
          alt={images[exercise]}
        />
        <span className="haikusmall">
          {description[exercise]}
          <br></br>
          {counter}
        </span>
      </div>
    </div>
  );
}
