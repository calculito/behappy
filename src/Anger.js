import React, { useState } from "react";
import Timer from "./Timer";
export default function Anger({ onGridClick }) {
  const [anger, setanger] = useState(undefined);
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder={
            anger === undefined
              ? "That is just a placeholder. Type your text to get rid of your anger. Anger control is important for helping you avoid saying or doing something you may regret. Before anger escalates, you can use specific strategies for controlling anger"
              : undefined
          }
          value={anger}
          onChange={(e) => setanger(e.target.value)}
          required
        />
      </form>
      <div className="minitext">
        <a href="https://www.healthline.com/health/mental-health/how-to-control-anger#1">
          see here more...
        </a>
      </div>
    </div>
  );
}
