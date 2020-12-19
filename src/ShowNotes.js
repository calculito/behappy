import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import back from "../src/images/back.png";
import dele from "../src/images/X.png";
import lupe from "../src/images/L.png";
import starblack from "../src/images/starblack.png";
import stargold from "../src/images/stargold.png";
import axios from "axios";
import API from "./Api.js";
import { setTokenSourceMapRange } from "typescript";

export default function ShowNotes({ onBackClick }) {
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const [allnotes, setallnotes] = useState(undefined);
  const [appState, setAppState] = useState({
    loading: null,
  });
  const categories = ["text", "theatre", "important", "personal"];
  const bgcolors = [
    "lightgray",
    "lightpink",
    "lightgreen",
    " lightsalmon",
    "lightblue",
  ];
  const del = () => {
    setcat(0);
    setstars(0);
  };

  useEffect(() => {
    axios
      .get(`https://dashybackend.herokuapp.com/getnotes`)
      .then((response) => {
        setallnotes(response.data);
        setAppState({
          loading: false,
        });
      });
  }, [stars, cat]);

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
  const goback = () => {
    onBackClick(17);
  };

  return (
    <div className="containerColumn">
      <div className="bigTextcolumn">
        <div className="iconscontainer">
          <img className="icons" src={back} alt="back" onClick={goback} />
          <img className="icons" src={lupe} alt="lupe" />
          <img className="icons" src={dele} alt="add" onClick={del} />
        </div>
        <div className="containernotes">
          {appState.loading === false ? (
            allnotes.map((data, i) => {
              return (
                <div
                  key={"notes" + i}
                  className="papernotes"
                  style={{
                    backgroundColor: bgcolors[data.cat],
                    fontWeight: cat === i + 1 ? "bold" : "normal",
                  }}
                  onClick={() => setcat(i + 1)}
                >
                  {data.note}
                </div>
              );
            })
          ) : (
            <div>Fetching data...</div>
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
