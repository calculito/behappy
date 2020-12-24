import React, { useState } from "react";
import Timer from "./Timer";
import Swal from "sweetalert2";

export default function Thank({ onGridClick }) {
  const allthanks = [
    "Thank you for all your hard work on this",
    "Thanks again, we couldn’t have pulled this off without you",
    "Thank you, you’re amazing!",
    "I’m so thankful for everything you bring to the table",
    "Thank you kindly",
    "Warmest thanks",
    "I truly appreciate your hard work",
    "From the bottom of my heart, thank you",
    "Please accept my deepest thanks",
    "I can’t thank you enough",
    "Grateful for your support",
    "I appreciate your thoughtfulness, you’ve made my day!",
    "Thank you for going above and beyond!",
    "Thanks for being in my corner",
    "So glad you’re on my team",
    "I appreciate your assistance and look forward to your continuing to work on our account.",
    "Thanks very much for the assistance you provide my business. It is sincerely appreciated.",
  ];
  const thankschosen = (i) => {
    console.log(i);
    Swal.fire({
      title: "Nice!",
      text: "Now open your messaging app, paste it there and send it!",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allthanks[i]);
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <br></br>
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <span>Click on your favourite text to copy it to the clipboard.</span>
      </div>
      <div className="containergrates">
        {allthanks.map((data, i) => {
          return (
            <div
              key={"grates" + i}
              className={"papernotesreihen"}
              onClick={() => thankschosen(i)}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
