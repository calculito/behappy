import React from "react";
import Timer from "./Timer";
import HeadTurn from "./images/headturn.png";
import HeadTurn1 from "./images/headturn1.png";
import SideNeckStretch from "./images/sideneckstretch.png";
import SideNeckStretch1 from "./images/sideneckstretch1.png";
import ShoulderStretch from "./images/shoulderstretch.png";
import ShoulderStretch1 from "./images/shoulderstretch1.png";
import UpperArmStretch from "./images/upperarmstretch.png";
import UpperArmStretch1 from "./images/upperarmstretch1.png";
import StandingChestStretch from "./images/standingcheststretch.png";
import StandingChestStretch1 from "./images/standingcheststretch1.png";
export default function Exercise({ onGridClick }) {
  const [exercise, setExercise] = React.useState(0);
  const [counter, setCounter] = React.useState(5);

  const description = [
    "Rotate your chin towards your RIGHT shoulder. Hold...",
    "Rotate your chin towards your LEFT shoulder. Hold...",
    "Slowly turn your head to the RIGHT until you feel a stretch in the side of your neck and shoulder. Hold...",
    "Slowly turn your head to the LEFT until you feel a stretch in the side of your neck and shoulder. Hold...",
    "Raise one arm to shoulder height, and reach it across your chest. Pull the arm slightly toward you with your other arm. Hold...",
    "Raise one arm to shoulder height, and reach it across your chest. Pull the arm slightly toward you with your other arm. Hold...",
    "Bring one arm overhead and drop your forearm behind you. With your other hand, grab right above your bent elbow and pull gently...",
    "Bring one arm overhead and drop your forearm behind you. With your other hand, grab right above your bent elbow and pull gently...",
    "Take the arms behind you. Straighten the arms and gently lift your hands up until you feel a stretch in your chest.",
  ];
  const images = {
    0: HeadTurn,
    1: HeadTurn1,
    2: SideNeckStretch,
    3: SideNeckStretch1,
    4: ShoulderStretch,
    5: ShoulderStretch1,
    6: UpperArmStretch,
    7: UpperArmStretch1,
    8: StandingChestStretch,
  };
  React.useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : change();
    return () => clearInterval(timer);
  }, [counter]);

  const change = () => {
    exercise < 10
      ? setExercise(() => setExercise(exercise + 1))
      : setExercise(() => setExercise(0));
    setCounter(() => setCounter(7));
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
          <br></br>
          {description[exercise]}
          <br></br>
          {counter}
        </span>
      </div>
    </div>
  );
}
//Avoid stretches that cause pain or discomfort.
