import React from "react";
import Swal from "sweetalert2";
export default function Smile({ onGridClick }) {
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
      <div className="mirror" onClick={sendit}>
        <span className="haiku">smile... :)</span>
      </div>
    </div>
  );
}
