import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Smile({ onGridClick }) {
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <TakeMeOut onGridClick={onGridClick} />
      <div className="mirror" onClick={sendit}>
        <span className="haiku">smile... :)</span>
      </div>
    </div>
  );
}
