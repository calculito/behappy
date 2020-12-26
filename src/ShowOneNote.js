import React, { useState, useEffect } from "react";
import plus from "../src/images/+.png";
import back from "../src/images/back.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";
import axios from "axios";
import { setTokenSourceMapRange } from "typescript";
import Swal from "sweetalert2";

export default function ShowOneNote({ onAddClick, idSingleNote, whichIndex }) {
  const [cat, setcat] = useState(0);
  const [id, setid] = useState(0);
  const [changes, setchanges] = useState(0);
  const [stars, setstars] = useState(0);
  const [allnotes, setallnotes] = useState(undefined);
  const [loading, setloading] = useState(null);
  const categories = ["TEXT", "BOOK", "IDEA", "PERS", "ARTA"];
  const bgcolors = [
    "lightgray",
    "lightpink",
    "lightgreen",
    " lightsalmon",
    "lightblue",
    "gold",
  ];

  useEffect(() => {
    axios
      .get(`https://dashybackend.herokuapp.com/getnotes`)
      .then((response) => {
        setallnotes(
          response.data.filter((dataset) => dataset.id === idSingleNote)
        );
        setstars(response.data[0].stars);
        setid(response.data[0].id);
        setloading(false);
      });
  }, [whichIndex]);

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
  function StarsHave(nrofstars) {
    let starsall = [];
    for (let i = 0; i < 5; i++) {
      starsall.push(
        <img
          className="starSymbolsSmall"
          src={nrofstars.nrofstars > i ? stargold : starblack}
          alt="star"
          key={i}
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
    console.log(stars, cat, id);
    const data = {
      stars: stars,
      cat: cat,
    };
    await fetch(
      "https://dashybackend.herokuapp.com/changeonenote/".concat(id),
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
    setcat(i + 1);
    setchanges(1);
  };
  console.log(
    "cat " + cat,
    "stars " + stars,
    allnotes,
    "changes " + changes,
    "id " + id,
    loading
  );
  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="iconscontainer">
          <img className="icons" src={back} alt="back" onClick={goback} />
          <img className="icons" src={plus} alt="back" onClick={savenote} />
        </div>
        <div className="containernotes">
          {loading === false ? (
            allnotes.map((data, i) => {
              return (
                <div
                  key={"notes" + i}
                  className="papernotesreihen"
                  style={{
                    backgroundColor:
                      cat === 0 ? bgcolors[data.cat] : bgcolors[cat],
                  }}
                >
                  <div className="titelzeile">
                    {data.title === null ? "..." : data.title}
                    <div className="containerstars">
                      <StarsHave nrofstars={data.stars} />
                    </div>
                  </div>
                  {data.note}
                </div>
              );
            })
          ) : (
            <div>Fetching data....</div>
          )}
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
                  fontWeight: cat === i + 1 ? "bold" : "normal",
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
