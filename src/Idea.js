import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Idea({ onGridClick }) {
  const [idea, setidea] = useState(undefined);
  const [counter, setCounter] = React.useState(60);

  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    changestatus(idea);
  };

  React.useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : sendit();
    return () => clearInterval(timer);
  }, [counter]);

  async function changestatus(idea) {
    const data = { ideadb: idea };
    await fetch(
      "https://dashybackend.herokuapp.com/postwindowbehappy/".concat(idea),
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    setidea(undefined);
    onGridClick(0);
  }

  return (
    <div className="containerColumn">
      <div className="timer">{counter}</div>
      <form className="form">
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder="That is just a placeholder. Type your text to describe your idea. Happiness is a now thing. Don't wait until later to be happy. Share your idea, how you manage to feel better..."
          value={idea}
          onChange={(e) => setidea(e.target.value)}
          required
        />
      </form>
      <div className="minitext">
        <a href="https://www.happier.com/blog/25-ways-to-feel-happier-in-the-next-5-minutes/">
          see here more...
        </a>
      </div>
    </div>
  );
}
