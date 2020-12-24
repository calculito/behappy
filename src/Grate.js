import React, { useState } from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Grate({ onGridClick }) {
  const [gift, setgift] = useState(undefined);
  const allgrates = [
    "This holiday season, let’s make it a point to cherish what’s truly important in our lives: cookies.",
    "I told Santa you were good this year and sent him a link to your Pinterest board. Merry Christmas to you!",
    "Merry Christmas! I put so much thought into your gift that now it's too late to get it.",
    "Eat. Drink. Be Merry. Have a wonderful Christmas!",
    "Merry Christmas! Wishing you all the happiness your holiday can hold!",
    "I hope the magic of Christmas fills every corner of your heart and home with joy — now and always.",
    "May your family have a holiday season that is full of wonderful surprises, treats and nonstop laughter.",
    "Wishing you a Christmas that's merry and bright!",
    "Happy Holidays! I hope all of your Christmas wishes come true.",
    "Wishing you and your loved ones a blessed Christmas.",
    "The only thing I love more than Christmas is you.",
    "It’s not what’s under the tree that matters most, it’s who’s around it. Every year I’m so grateful to have you there.",
    "Merry Christmas! You're the best gift I could ask for.",
    "I wish we could be together this holiday season, but I'm sending warm wishes your way.",
  ];
  const gratechosen = (i) => {
    console.log(i);
    Swal.fire({
      title: "Nice!",
      text: "Now open your messaging app, paste it there and send it!",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allgrates[i]);
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <span>Click on your favourite text to copy it to the clipboard.</span>
        <span style={{ textAlign: "center", width: "88vw" }}>
          Then just open your messaging app like mail, whatsapp or whatever,
          paste the text and send it! Happy Christmas!
        </span>
      </div>
      <div className="containergrates">
        {allgrates.map((data, i) => {
          return (
            <div
              key={"grates" + i}
              className={"papernotesreihen"}
              onClick={() => gratechosen(i)}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
