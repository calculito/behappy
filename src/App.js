import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import Info from "./Info";
import Idea from "./Idea";
import Anger from "./Anger";
import Forgive from "./Forgive";
import Footer from "./Footer";

export default function App() {
  const [whichIndex, setwhichIndex] = useState(0);
  const chooseIndex = (i) => {
    setwhichIndex(i);
  };
  console.log(whichIndex);
  return (
    <>
      {
        {
          0: <Grid onGridClick={chooseIndex} />,
          1: <Info />,
          2: <Grid onGridClick={chooseIndex} />,
          3: <Grid onGridClick={chooseIndex} />,
          4: <Grid onGridClick={chooseIndex} />,
          5: <Grid onGridClick={chooseIndex} />,
          6: <Grid onGridClick={chooseIndex} />,
          7: <Grid onGridClick={chooseIndex} />,
          8: <Grid onGridClick={chooseIndex} />,
          9: <Grid onGridClick={chooseIndex} />,
          10: <Grid onGridClick={chooseIndex} />,
          11: <Forgive onFooterClick={chooseIndex} />,
          12: <Anger onFooterClick={chooseIndex} />,
          13: <Grid onGridClick={chooseIndex} />,
          14: <Idea onFooterClick={chooseIndex} />,
          15: <Info />,
        }[whichIndex]
      }
      <Footer onFooterClick={chooseIndex} whichIndex={whichIndex} />
    </>
  );
}
