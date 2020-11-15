import React, { Fragment, useState, useEffect } from "react";
import InstrumentAudio from "./InstrumentAudio";
import getNotesBetween from "./GetNotesBetween";

const isRegularKey = (event) => {
  return !event.ctrlKey && !event.metaKey && !event.shiftKey;
};
const Instrument = ({ instrumentName, startNote, endNote, keyboardMap }) => {
  const notes = getNotesBetween(startNote, endNote);

  const [state, setState] = useState({
    notesPlaying: [],
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, []);

  const getNoteFromKeyboardKey = (keyboardKey) => {
    return keyboardMap[keyboardKey.toUpperCase()];
  };

  const handleKeyDown = (e) => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
      }
    }
  };

  const handleKeyUp = (e) => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({
          ...state,
          notesPlaying: state.notesPlaying.filter(
            (notePlaying) => notePlaying !== note
          ),
        });
      }
    }
  };

  const onPlayNoteStart = (note) => {
    setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
  };

  const onPlayNoteEnd = (note) => {
    setState({
      ...state,
      notesPlaying: state.notesPlaying.filter(
        (notePlaying) => notePlaying !== note
      ),
    });
  };

  //rendering piano keys
  return (
    <Fragment>
      <InstrumentAudio
        instrumentName={instrumentName}
        notes={state.notesPlaying}
      />
    </Fragment>
  );
};

export default Instrument;
