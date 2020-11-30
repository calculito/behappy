import React, { useState } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import MeditateSound from "./images/meditation.mp3";
import Play from "./images/play.svg";
import Stop from "./images/stop.svg";
import Timer from "./Timer";
export default function Meditation({ onGridClick }) {
  const [play, { stop }] = useSound(MeditateSound);
  const [isPlaying, setIsPlaying] = useState(false);
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />

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
            alt="Play button"
            onClick={() => {
              setIsPlaying(true);
              sendit();
            }}
          />
        )}
      </div>
    </div>
  );
}
