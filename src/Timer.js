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

    window.navigator.vibrate && window.navigator.vibrate(100); //check if vibrate is supported by browser
    onGridClick(0);
  };

  React.useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : sendit();
    return () => clearInterval(timer);
  }, [counter]);
  return <div className="timer">{counter}</div>;
}
