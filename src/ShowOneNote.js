import React, { useState } from "react";
import plus from "../src/images/+.png";
import back from "../src/images/back.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";
import { setTokenSourceMapRange } from "typescript";
import Swal from "sweetalert2";

export default function ShowOneNote({
  onAddClick,
  whichIndex,
  cat,
  stars,
  idSingleNote,
  title,
  note,
}) {
  const [changes, setchanges] = useState(0);
  const [herecat, setherecat] = useState(cat);
  const [herestars, setherestars] = useState(stars);
  const [hereid, sethereid] = useState(idSingleNote);
  const [heretitle, setheretitle] = useState(title);
  const [herenote, setherenote] = useState(note);
  const categories = ["TEXT", "BOOK", "IDEA", "PERS", "ARTA"];
  const bgcolors = [
    "lightgray",
    "lightpink",
    "lightgreen",
    " lightsalmon",
    "lightblue",
    "gold",
  ];

  function StarsGen() {
    let starsall = [];
    for (let i = 0; i < 5; i++) {
      starsall.push(
        <img
          className="starSymbols"
          src={herestars > i ? stargold : starblack}
          alt="star"
          key={i}
          onClick={() => setherestars(i + 1)}
        />
      );
    }
    return starsall;
  }

  const goback = () => {
    changes === 0 ? onAddClick(17) : alertandreset();
  };
  const alertandreset = () => {
    setchanges(0);
    Swal.fire({
      title: "Hey!",
      text: "You changed something!",
      confirmButtonText: "OK",
    });
  };

  async function savenote() {
    const data = {
      stars: herestars,
      cat: herecat,
      title: heretitle,
      note: herenote,
    };
    await fetch(
      "https://dashybackend.herokuapp.com/changeonenote/".concat(hereid),
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    Swal.fire({
      title: "Nice!",
      text: "note saved...",
      icon: "success",
      confirmButtonText: "OK",
    });
    onAddClick(17);
  }
  const changed = (i) => {
    setherecat(i + 1);
    setchanges(1);
  };

  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="iconscontainer">
          <img className="icons" src={back} alt="back" onClick={goback} />
          <img className="icons" src={plus} alt="back" onClick={savenote} />
        </div>
        <div className="containernotes">
          <textarea
            style={{
              backgroundColor: herecat > 0 ? bgcolors[herecat] : "transparent",
            }}
            name="title"
            className="title"
            autoFocus
            type="text"
            placeholder={heretitle === undefined ? "title..." : undefined}
            value={heretitle}
            onChange={(e) => setheretitle(e.target.value)}
            required
          />

          <textarea
            name="notes"
            className="notes"
            type="text"
            placeholder={herenote === undefined ? "write here..." : undefined}
            value={herenote}
            onChange={(e) => setherenote(e.target.value)}
            required
          />
        </div>
        <div className="containercat">
          <StarsGen />
        </div>
        <div className="containercat">
          {categories.map((data, i) => {
            return (
              <div
                key={"cat" + i}
                className="containercat"
                style={{
                  backgroundColor: bgcolors[i + 1],
                  fontWeight: herecat === i + 1 ? "bold" : "normal",
                }}
                onClick={() => changed(i)}
              >
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
