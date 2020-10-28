import React, { useState } from "react";
import Timer from "./Timer";
export default function Idea({ onGridClick }) {
  const [idea, setidea] = useState(undefined);
  onGridClick === 0 && console.log(0);
  async function changestatus(idea) {
    const data = { ideadb: idea };
    console.log(data);
    idea !== "" &&
      (await fetch(
        "https://dashybackend.herokuapp.com/postwindowbehappy/".concat(16),
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      ));
    setidea(undefined);
  }
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder="describe here your idea..."
          value={idea}
          onChange={(e) => setidea(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
