import React, { useState, useEffect } from "react";
import plus from "../src/images/+.png";
import gliedboxes from "../src/images/gliedboxes.png";
import gliedreihen from "../src/images/gliedreihen.png";
import filteron from "../src/images/filteron.png";
import filteroff from "../src/images/filteroff.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";
import axios from "axios";
import { setTokenSourceMapRange } from "typescript";

export default function ShowNotes({ onAddClick }) {
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const [allnotes, setallnotes] = useState(undefined);
  const [loading, setloading] = useState(null);
  const [gliederung, setgliederung] = useState(0);
  const [check, setcheck] = useState(0);

  const categories = ["TEXT", "BOOK", "IDEA", "PERS", "ARTA"];
  const bgcolors = [
    "lightgray",
    "lightpink",
    "lightgreen",
    " lightsalmon",
    "lightblue",
    "gold",
  ];
  const filter = () => {
    setcat(0);
    setstars(0);
    setcheck(0);
  };

  useEffect(() => {
    axios
      .get(`https://dashybackend.herokuapp.com/getnotes`)
      .then((response) => {
        let catfilter =
          cat > 0
            ? response.data.filter((dataset) => dataset.cat === cat)
            : response.data;
        setallnotes(catfilter.filter((dataset) => dataset.stars > stars - 1));
        setloading(false);
      });
  }, [stars, cat, gliederung]);
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
  const addnote = () => {
    onAddClick(18);
  };
  const glied = () => {
    gliederung === 1 ? setgliederung(0) : setgliederung(1);
  };

  const notechosen = (cat, stars, id, title, note) => {
    console.log(cat, stars, check, id, title, note);
    setcheck(check + 1);
    check > 0 && onAddClick(19, cat, stars, id, title, note);
    setcat(cat);
    setstars(stars);
  };
  return (
    <div className="containerColumn">
      <div className="bigTextcolumnNotes">
        <div className="iconscontainer">
          {stars > 0 || cat > 0 ? (
            <img
              className="icons"
              src={filteron}
              alt="filteron"
              onClick={filter}
            />
          ) : (
            <img
              className="icons"
              src={filteroff}
              alt="filteroff"
              onClick={filter}
            />
          )}

          <img
            className="icons"
            src={gliederung === 1 ? gliedboxes : gliedreihen}
            alt="how to align"
            onClick={glied}
          />
          <img className="icons" src={plus} alt="back" onClick={addnote} />
        </div>
        <div className="containernotes">
          {loading === false ? (
            allnotes.map((data, i) => {
              return (
                <div
                  key={"notes" + i}
                  className={
                    gliederung === 0 ? "papernotesreihen" : "papernotesboxes"
                  }
                  style={{
                    backgroundColor: bgcolors[data.cat],
                  }}
                  onClick={() =>
                    notechosen(
                      data.cat,
                      data.stars,
                      data.id,
                      data.title,
                      data.note
                    )
                  }
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
