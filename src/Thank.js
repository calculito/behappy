import React, { useState } from "react";
import Timer from "./Timer";
import Piano from "./Piano";
export default function Thank({ onGridClick }) {
  const [thank, setthank] = useState(undefined);
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
            thank === undefined
              ? "That is just a placeholder. Type your text to say thank you to someone. Gratitude is a way for people to appreciate what they have instead of always reaching for something new in the hopes it will make them happier, or thinking they can't feel satisfied until every physical and material need is met."
              : undefined
          }
          value={thank}
          onChange={(e) => setthank(e.target.value)}
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
