import React from "react";
import Swal from "sweetalert2";

export default function Timer({ onGridClick }) {
  const [counter, setCounter] = React.useState(60);

  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    onGridClick(0);
    setCounter(60);
  };

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  counter === 0 && sendit();
  return <div className="timer">{counter}</div>;
}
