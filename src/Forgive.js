import React, { useState } from "react";
import Timer from "./Timer";
import Piano from "./Piano";
export default function Forgive({ onGridClick }) {
  const [forgive, setforgive] = useState(undefined);
  return (
    <div className="containerColumn">
      <Piano />
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder={
            forgive === undefined
              ? "That is just a placeholder. Type your text to forgive someone. When you forgive, those nagging, negative thoughts will go away, and research shows you'll most likely experience less fear, anger, and depression, not to mention improved sleep, less physical pain, better cardiac function, and increased life satisfaction."
              : undefined
          }
          value={forgive}
          onChange={(e) => setforgive(e.target.value)}
          required
        />
      </form>
      <div className="minitext">
        <a href="https://wallstreetinsanity.com/6-ways-forgiveness-leads-to-a-happier-you/">
          see here more...
        </a>
      </div>
    </div>
  );
}
