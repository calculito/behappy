import React from "react";

export default function TakeMeOut({ onGridClick }) {
  const sendit = () => {
    window.navigator.vibrate && window.navigator.vibrate(100); //check if vibrate is supported by browser
    onGridClick(0);
  };

  return (
    <div className="takemeout" onClick={sendit}>
      X
    </div>
  );
}
