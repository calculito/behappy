import React, { useState } from "react";
import { isNotEmittedStatement } from "typescript";
import Swal from "sweetalert2";
import add from "../src/images/+.png";
import dele from "../src/images/X.png";
import lupe from "../src/images/L.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";

export default function Takenotes({ onLupeClick, whichIndex }) {
  const [title, settitle] = useState(undefined);
  const [note, setnote] = useState(undefined);
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const categories = ["TEXT", "BOOK", "IDEA", "PERS", "ARTA"];
  const bgcolors = [
    "lightgray",
    "lightpink",
    "lightgreen",
    " lightsalmon",
    "lightblue",
    "gold",
  ];
  const del = () => {
    setnote(undefined);
    settitle(undefined);
    setcat(0);
    setstars(0);
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );
  };
  const savenew = () => {
    note !== undefined && title === undefined && settitle("...");
    note !== undefined ? newnote() : sendit();
  };
  //console.log(cat, title);
  async function newnote() {
    var datenow = new Date();
    console.log(datenow);
    const data = {
      notetitle: title,
      notetext: note,
      stars: stars,
      savetime: datenow,
    };
    await fetch("https://dashybackend.herokuapp.com/postnewnote/".concat(cat), {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    del();
    Swal.fire({
      title: "Nice!",
      text: "note saved...",
      icon: "success",
      confirmButtonText: "OK",
    });
    //onGridClick(0);
  }
  const sendit = () => {
    Swal.fire({
      title: "Hey!",
      text: "no content in your note...",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };
  function StarsGen() {
    let starsall = [];
    for (let i = 0; i < 5; i++) {
      starsall.push(
        <img
          className="starSymbols"
          src={stars > i ? stargold : starblack}
          alt="star"
          key={i}
          onClick={() => setstars(i + 1)}
        />
      );
    }
    return starsall;
  }
  const onLupeClick1 = () => {
    whichIndex === 17 ? onLupeClick(0) : onLupeClick(17);
  };
  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="iconscontainer">
          <img className="icons" src={dele} alt="delete" onClick={del} />
          <img
            className="icons"
            src={lupe}
            alt="lupe"
            onClick={() => onLupeClick1(18)}
          />
          <img className="icons" src={add} alt="add" onClick={savenew} />
        </div>

        <textarea
          style={{
            backgroundColor: cat > 0 ? bgcolors[cat - 1] : "transparent",
          }}
          name="title"
          className="title"
          autoFocus
          type="text"
          placeholder={title === undefined ? "title..." : undefined}
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />

        <textarea
          name="notes"
          className="notes"
          type="text"
          placeholder={note === undefined ? "write here..." : undefined}
          value={note}
          onChange={(e) => setnote(e.target.value)}
          required
        />
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
                  backgroundColor: bgcolors[i],
                  fontWeight: cat === i + 1 ? "bold" : "normal",
                }}
                onClick={() => setcat(i + 1)}
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
