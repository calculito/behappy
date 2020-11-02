import React from "react";
import Timer from "./Timer";

export default function Decision({ onGridClick }) {
  const [question, setQuestion] = React.useState(0);
  const [percent, setPercent] = React.useState(50);
  const description = [
    "My heart would say yes!",
    "My brain would say yes!",
    "Intuitively I woud say yes!",
    "This decision would be the best alternative!",
    "This decision could be reversed!",
    "I had enough time to think about this decision!",
    "As an outsider I would say yes!",
    "An yes would have a positive outcome for me!",
    "An yes would have a positive outcome for others!",
    "5 years ago I would have said yes!",
    "My future me would appreciate an yes!",
    "This decision in line with my long-term goals!",
  ];

  const change = () => {
    question < description.length &&
      setQuestion(() => setQuestion(question + 1));
  };
  const changePercentPlus = () => {
    percent < 100 && setPercent(() => setPercent(percent + 10));
    change();
  };
  const changePercentMinus = () => {
    percent > 10 && setPercent(() => setPercent(percent - 10));
    change();
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="containerColumn">
        <span className="haikusmall">{description[question]}</span>
        {question === 12 && <span className="haikusmall">That's it:</span>}
        <div className="percent">
          {" "}
          <div
            className="paper"
            onClick={changePercentPlus}
            style={{ backgroundColor: "lightgreen" }}
          >
            <span className="haikusmall">yes = {percent}% </span>{" "}
          </div>
          <div
            className="paper"
            onClick={changePercentMinus}
            style={{ backgroundColor: "lightsalmon" }}
          >
            <span className="haikusmall">no = {100 - percent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
