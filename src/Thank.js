import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Thank({ onGridClick }) {
  const [thank] = useState(undefined);
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
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
          placeholder="say thank you to someone..."
          value={thank}
          required
        />

        <input type="submit" value="Thank" className="button" />
      </form>
    </div>
  );
}
