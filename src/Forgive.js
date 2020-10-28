import React, { useState } from "react";
import Timer from "./Timer";
export default function Forgive({ onGridClick }) {
  const [forgive, setforgive] = useState(undefined);
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder={
            forgive === undefined ? "forgive here someone..." : undefined
          }
          value={forgive}
          onChange={(e) => setforgive(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
