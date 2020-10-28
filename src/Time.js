import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Time({ onGridClick }) {
  const sendit = () => {
    Swal.fire({
      title: "Please!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  return (
    <div className="containerColumn">
      <div className="bigText" onClick={sendit}>
        <span className="haiku2x">
          {" "}
          <Timer onGridClick={onGridClick} />
        </span>
      </div>
    </div>
  );
}
