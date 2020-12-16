import React, { useState } from "react";
import { isNotEmittedStatement } from "typescript";
import Swal from "sweetalert2";
export default function Takenotes() {
  const [title, settitle] = useState(undefined);
  const [note, setnote] = useState(undefined);
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const categories = ["text", "theatre", "important", "personal"];
  const bgcolors = ["lightpink", "lightgreen", " lightsalmon", "lightblue"];
  const del = () => {
    setnote(undefined);
    settitle(undefined);
    setcat(0);
    Array.from(document.querySelectorAll("textarea")).forEach(
      (input) => (input.value = "")
    );
  };
  const savenew = () => {
    console.log(cat);
    note !== undefined ? newnote() : sendit();
  };

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
  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="titlecontainer">
          <div className="de del" onClick={del}>
            ❎
          </div>
          <div className="searchfield">
            {" "}
            <span>🔍 SEARCH</span>
          </div>
          <div className="de der" onClick={savenew}>
            ✅
          </div>
        </div>

        <textarea
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

        <div className="title">"☆☆☆☆☆"</div>
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
