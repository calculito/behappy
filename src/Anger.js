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
            anger === undefined ? "express here your anger ..." : undefined
          }
          value={anger}
          onChange={(e) => setanger(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
