import React, { useState } from "react";
import useSound from "use-sound";
import MeditateSound from "./images/meditation.mp3";
import TakeMeOut from "./TakeMeOut";
import Play from "./images/play.svg";
import Stop from "./images/stop.svg";
import Timer from "./Timer";
export default function Meditation({ onGridClick }) {
  const [play, { stop }] = useSound(MeditateSound);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <TakeMeOut onGridClick={onGridClick} />
      <div className="bigTextcolumn ">
        <span className="typo">
          Press the 'Play' button, close your eyes and enjoy the energy!{" "}
        </span>
        {isPlaying === false ? (
          <img
            key="Start"
            className="logoPlay"
            src={Play}
            alt="Play button"
            onClick={() => {
              setIsPlaying(true);
              play();
            }}
          />
        ) : (
          <img
            key="Start"
            className="logoPlay"
            src={Stop}
            alt="Stop button"
            onClick={() => {
              setIsPlaying(false);
              stop();
            }}
          />
        )}
      </div>
    </div>
  );
}
