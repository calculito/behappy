import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Idea({ onFooterClick }) {
  const [idea, setidea] = useState(undefined);
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We thank you so much...",
      icon: "success",
      confirmButtonText: "You're welcome!",
    });
    onFooterClick(0);
  };
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
        />

        <input type="submit" value="here my idea" className="button" />
      </form>
    </div>
  );
}
