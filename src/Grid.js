import React from "react";
import "./App.css";
import Flower from "../src/images/flower.png";
import Word from "../src/images/word.png";
import Meditation from "../src/images/meditation.png";
import Grate from "../src/images/grate.png";
import Quote from "../src/images/quote.png";
import Art from "../src/images/art.png";
import Exercise from "../src/images/exercise.png";
import Breath from "../src/images/breath.png";
import Thank from "../src/images/thank.png";
import Haiku from "../src/images/haiku.png";
import Time from "../src/images/time.png";
import Forgive from "../src/images/forgive.png";
import Anger from "../src/images/anger.png";
import Decision from "../src/images/decision.png";
import Idea from "../src/images/idea.png";

const content = [
  "Learn a word",
  "mediation sound",
  "get a flower",
  "be grateful",
  "get a quote",
  "see art",
  "healthy exercises",
  "relaxing breath",
  "thank someone (us)",
  "read a haiku",
  "take time for yourself",
  "forgive someone",
  "send me all your frust",
  "decision helper",
  "send us an idea",
];
const images = {
  0: Flower,
  1: Word,
  2: Meditation,
  3: Grate,
  4: Quote,
  5: Art,
  6: Exercise,
  7: Breath,
  8: Thank,
  9: Haiku,
  10: Time,
  11: Forgive,
  12: Anger,
  13: Decision,
  14: Idea,
};

export default function Grid({ onGridClick, beblur }) {
  console.log(beblur);
  return (
    <>
      <div className={beblur === 0 ? "container" : "container containerblur"}>
        {content.map((data, i) => {
          return (
            <div className="paper" key={"paper" + i}>
              {" "}
              <img
                key={images[i]}
                className="logoItems"
                src={images[i]}
                alt={images[i]}
                onClick={() => onGridClick(i + 1)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
