import React from "react";
import Swal from "sweetalert2";
export default function Time({ onGridClick }) {
  const [counter, setCounter] = React.useState(60);
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    onGridClick(0);
  };
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="containerColumn">
      <div className="bigText" onClick={sendit}>
        <span className="haiku2x">{counter}</span>
      </div>
    </div>
  );
}
