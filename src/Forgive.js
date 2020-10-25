import React, { useState } from "react";
import Swal from "sweetalert2";
export default function Forgive({ onGridClick }) {
  const [forgive, setforgive] = useState(undefined);
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
          placeholder="forgive here someone..."
          value={forgive}
          onChange={(e) => setforgive(e.target.value)}
          required
        />

        <input type="submit" value="I forgive" className="button" />
      </form>
    </div>
  );
}
