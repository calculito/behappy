import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Idea({ onGridClick }) {
  const [idea, setidea] = useState(undefined);
  const sendit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Perfect!",
      text: "Thank you so much...",
      icon: "success",
      confirmButtonText: "You're welcome!",
    });
    onGridClick(0);
    changestatus(idea);
  };
  console.log(idea);
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
      <form className="form" onSubmit={sendit}>
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder="describe here your idea..."
          value={idea}
          onChange={(e) => setidea(e.target.value)}
          required
        />

        <input type="submit" value="here my idea" className="button" />
      </form>
    </div>
  );
}
