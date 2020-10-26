import React from "react";
import Swal from "sweetalert2";
export default function Number({ onGridClick }) {
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    onGridClick(0);
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 101);
  return (
    <div className="containerColumn">
      <div className="bigText" onClick={sendit}>
        <span className="haiku2x">{"+" + nr}</span>
      </div>
    </div>
  );
}
