import React from "react";
export default function Smile({ onGridClick }) {
  const sendit = () => {
    onGridClick(0);
  };
  return (
    <div className="containerColumn">
      <div className="mirror" onClick={sendit}></div>
    </div>
  );
}
