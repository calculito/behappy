import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Anger({ onGridClick }) {
  const [anger, setanger] = useState(undefined);
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
          placeholder="write here all your anger away..."
          value={anger}
          onChange={(e) => setanger(e.target.value)}
          required
        />

        <input type="submit" value="fuck it" className="button" />
      </form>
    </div>
  );
}
