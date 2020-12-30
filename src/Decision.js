import React from "react";
import Timer from "./Timer";
import TakeMeOut from "./TakeMeOut";

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
    "If I decide for NO, I will regret it",
  ];

  const change = () => {
    question < description.length &&
      setQuestion(() => setQuestion(question + 1));
  };
  const changePercentPlus = () => {
    question < 13 &&
      percent < 100 &&
      setPercent(() => setPercent(percent + 10));
    change();
  };
  const changePercentMinus = () => {
    question < 13 && percent > 10 && setPercent(() => setPercent(percent - 10));
    change();
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <TakeMeOut onGridClick={onGridClick} />
      <div className="containerColumn">
        <span className="haikusmall">{description[question]}</span>
        {question < 13 && (
          <span className="typo">(Click on one of the buttons below)</span>
        )}
        {question === 13 && <span className="haikusmall">That's it:</span>}
        <div className="percent">
          {" "}
          <div
            className="paper"
            onClick={changePercentPlus}
            style={{
              backgroundColor: "lightgreen",
              color: "indianred",
              fontWeight: "bold",
            }}
          >
            <span
              className="haikusmall"
              style={{
                backgroundColor: "lightgreen",
                color: "indianred",
                fontWeight: "bold",
              }}
            >
              yes ({percent}%){" "}
            </span>{" "}
          </div>
          <div
            className="paper"
            onClick={changePercentMinus}
            style={{ backgroundColor: "indianred", color: "lightgreen" }}
          >
            <span
              className="haikusmall"
              style={{ backgroundColor: "indianred", color: "lightgreen" }}
            >
              no ({100 - percent}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
