import React, { useState } from "react";
import Timer from "./Timer";
export default function Thank({ onGridClick }) {
  const [thank, setthank] = useState(undefined);
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder={
            thank === undefined ? "say thank you to someone..." : undefined
          }
          value={thank}
          onChange={(e) => setthank(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
