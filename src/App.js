import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";
import Info from "./Info";
import Idea from "./Idea";
import Anger from "./Anger";
import Forgive from "./Forgive";
import Smile from "./Smile";
import Thank from "./Thank";
import Flower from "./Flower";
import Footer from "./Footer";

export default function App() {
  const [whichIndex, setwhichIndex] = useState(0);
  const chooseIndex = (i) => {
    setwhichIndex(i);
  };

  return (
    <>
      {
        {
          0: <Grid onGridClick={chooseIndex} />,
          1: <Flower onGridClick={chooseIndex} />,
          2: <Info onGridClick={chooseIndex} />,
          3: <Grid onGridClick={chooseIndex} />,
          4: <Grid onGridClick={chooseIndex} />,
          5: <Grid onGridClick={chooseIndex} />,
          6: <Grid onGridClick={chooseIndex} />,
          7: <Smile onGridClick={chooseIndex} />,
          8: <Grid onGridClick={chooseIndex} />,
          9: <Thank onGridClick={chooseIndex} />,
          10: <Grid onGridClick={chooseIndex} />,
          11: <Grid onGridClick={chooseIndex} />,
          12: <Forgive onGridClick={chooseIndex} />,
          13: <Anger onGridClick={chooseIndex} />,
          14: <Grid onGridClick={chooseIndex} />,
          15: <Idea onGridClick={chooseIndex} />,
          16: <Info />,
        }[whichIndex]
      }
      <Footer onFooterClick={chooseIndex} whichIndex={whichIndex} />
    </>
  );
}
