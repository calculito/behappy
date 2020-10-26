import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Grate({ onGridClick }) {
  const [idea, setidea] = useState(undefined);
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "Thank you so much...",
      icon: "success",
      confirmButtonText: "You're welcome!",
    });
    onGridClick(0);
  };
  return (
    <div className="containerColumn">
      <form className="form" onSubmit={sendit}>
        <textarea
          className="bigWindowForText"
          autoFocus
          type="text"
          placeholder="send someone a virtual gift..."
          value={idea}
          onChange={(e) => setidea(e.target.value)}
          required
        />

        <input type="submit" value="send my gift" className="button" />
      </form>
    </div>
  );
}
