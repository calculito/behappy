import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import back from "../src/images/back.png";
import dele from "../src/images/X.png";
import gliedboxes from "../src/images/gliedboxes.png";
import gliedreihen from "../src/images/gliedreihen.png";
import filteron from "../src/images/filteron.png";
import filteroff from "../src/images/filteroff.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";
import axios from "axios";
import { setTokenSourceMapRange } from "typescript";

export default function ShowNotes({ onBackClick }) {
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const [allnotes, setallnotes] = useState(undefined);
  const [loading, setloading] = useState(null);
  const [gliederung, setgliederung] = useState(0);

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
  //console.log(cat, stars, allnotes);
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
    console.log(nrofstars.nrofstars);
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
    onBackClick(17);
  };
  const glied = () => {
    console.log("run");
    gliederung === 1 ? setgliederung(0) : setgliederung(1);
  };
  const notechosen = (cat, stars) => {
    setcat(cat);
    setstars(stars);
  };
  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="iconscontainer">
          <img className="icons" src={back} alt="back" onClick={goback} />
          <img
            className="icons"
            src={gliederung === 1 ? gliedboxes : gliedreihen}
            alt="how to align"
            onClick={glied}
          />
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
                    fontWeight: cat === i + 1 ? "bold" : "normal",
                  }}
                  onClick={() => notechosen(data.cat, data.stars)}
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
