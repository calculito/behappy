import React from "react";
import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut,
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote,
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"C3"}
        endNote={"B5"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          Q: "C3",
          1: "C#3",
          W: "D3",
          2: "D#3",
          E: "E3",
          R: "F3",
          3: "F#3",
          T: "G3",
          4: "G#3",
          Y: "A3",
          5: "A#3",
          U: "B3",
          I: "C4",
          6: "C#4",
          O: "D4",
          7: "D#4",
          P: "E4",
          Z: "F4",
          8: "F#4",
          X: "G4",
          9: "G#4",
          C: "A4",
          F: "A#4",
          V: "B4",
          B: "C5",
          G: "C#5",
          N: "D5",
          H: "D#5",
          M: "E5",
          L: "F5",
          0: "F#5",
          S: "G5",
          J: "G#5",
          K: "A5",
          D: "A#5",
          A: "B5",
        }}
      />
    </div>
  );
};

export default Piano;
