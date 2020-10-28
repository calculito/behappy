import React, { useState } from "react";
import Timer from "./Timer";
export default function Grate({ onGridClick }) {
  const [gift, setgift] = useState(undefined);
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder={
            gift === undefined
              ? "send someone a virtual gift...(you don't really send anything)"
              : undefined
          }
          value={gift}
          onChange={(e) => setgift(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
