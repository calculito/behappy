import React, { useState } from "react";
import Timer from "./Timer";
import Swal from "sweetalert2";
import Bemerkung from "./Bemerkung";
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
    "I wanted to express my personal gratitude for the effort and extra time you have contributed",
    "I would like to thank you and your staff for the opportunity to meet with you.",
    "Thank you for such a wonderful contribution.",
    "A BIG thank you with a lot of love",
    "Thankful and grateful to have you as a friend.",
    "We’d love to express our gratitude for your generous gift.",
    "A heartfelt thank you for all that you’ve done.",
    "You made my day!",
    "I’m humbled and appreciative of all you’ve done on our behalf.",
    "The world is full of wonderful things like you!",
    "Our highest appreciation for your kindness.",
    "At this difficult time, it’s so nice to feel appreciated.",
  ];
  const thankschosen = (i) => {
    Swal.fire({
      title: "Nice!",
      text:
        "Now open your messaging app, paste the copied text there and send your message!",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allthanks[i]);
  };
  return (
    <div className="containerColumnDashed">
      <Timer onGridClick={onGridClick} />
      <br></br>
      <br></br>
      <br></br>
      <Bemerkung />
      <div className="containergrates">
        {allthanks.map((data, i) => {
          return (
            <div
              key={"thanks" + i}
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
