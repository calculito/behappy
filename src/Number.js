import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Number({ onGridClick }) {
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 101);
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="bigText" onClick={sendit}>
        <span className="haiku2x">{"+" + nr}</span>
      </div>
    </div>
  );
}
