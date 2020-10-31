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
              ? "That is just a placeholder. Type your text to show your gratitude. In positive psychology research, gratitude is strongly and consistently associated with greater happiness. Gratitude helps people feel more positive emotions, relish good experiences, improve their health, deal with adversity, and build strong relationships."
              : undefined
          }
          value={gift}
          onChange={(e) => setgift(e.target.value)}
          required
        />
      </form>
      <div className="minitext">
        <a href="https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier#:~:text=In%20positive%20psychology%20research%2C%20gratitude,express%20gratitude%20in%20multiple%20ways.">
          see here more...
        </a>
      </div>
    </div>
  );
}
