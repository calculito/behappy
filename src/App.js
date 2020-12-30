import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "./Grid";
import Decision from "./Decision";
import Info from "./Info";
import Idea from "./Idea";
import Anger from "./Anger";
import Forgive from "./Forgive";
import Exercise from "./Exercise";
import Thank from "./Thank";
import Flower from "./Flower";
import Word from "./Word";
import Meditate from "./Meditation";
import Haiku from "./Haiku";
import Time from "./Time";
import Breath from "./Breath";
import Grate from "./Grate";
import Quote from "./Quote";
import Art from "./Art";
import Footer from "./Footer";
import Swal from "sweetalert2";
import Takenotes from "./Takenotes";
import ShowNotes from "./ShowNotes";
import ShowOneNote from "./ShowOneNote";

export default function App() {
  const [whichIndex, setwhichIndex] = useState(0);
  const [idSingleNote, setidSingleNote] = useState(0);
  const [cat, setcat] = useState(0);
  const [stars, setstars] = useState(0);
  const [title, settitle] = useState(0);
  const [note, setnote] = useState(0);

  useEffect(() => {
    Swal.fire({
      title: "Welcome!",
      text:
        "Take a break of 60 seconds and enjoy the beauty of flowers, the power of positive quotes or get rid of anger and stress!",
      confirmButtonText: "Ok, got it",
    });
  }, []);

  async function chooseIndex(i) {
    await fetch(
      "https://dashybackend.herokuapp.com/postwindowbehappy/".concat(i),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    setwhichIndex(i);
  }
  function changeIndex(i, cat, stars, id, title, note) {
    setwhichIndex(i);
    setcat(cat);
    setstars(stars);
    setidSingleNote(id);
    settitle(title);
    setnote(note);
  }
  return (
    <>
      {
        {
          0: <Grid onGridClick={chooseIndex} />,
          1: <Flower onGridClick={chooseIndex} />,
          2: <Word onGridClick={chooseIndex} />,
          3: <Meditate onGridClick={chooseIndex} />,
          4: <Grate onGridClick={chooseIndex} />,
          5: <Quote onGridClick={chooseIndex} />,
          6: <Art onGridClick={chooseIndex} />,
          7: <Exercise onGridClick={chooseIndex} />,
          8: <Breath onGridClick={chooseIndex} />,
          9: <Thank onGridClick={chooseIndex} />,
          10: <Haiku onGridClick={chooseIndex} />,
          11: <Time onGridClick={chooseIndex} />,
          12: <Forgive onGridClick={chooseIndex} />,
          13: <Anger onGridClick={chooseIndex} whichIndex={whichIndex} />,
          14: <Decision onGridClick={chooseIndex} />,
          15: <Idea onGridClick={chooseIndex} />,
          16: <Info />,
          17: <ShowNotes onAddClick={changeIndex} whichIndex={whichIndex} />,
          18: <Takenotes onLupeClick={changeIndex} whichIndex={whichIndex} />,
          19: (
            <ShowOneNote
              onAddClick={changeIndex}
              whichIndex={whichIndex}
              cat={cat}
              stars={stars}
              idSingleNote={idSingleNote}
              title={title}
              note={note}
            />
          ),
        }[whichIndex]
      }
      <Footer onFooterClick={chooseIndex} whichIndex={whichIndex} />
    </>
  );
}
