import React, { useState } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import MeditateSound from "./images/meditation.mp3";
import Play from "./images/play.svg";
import Stop from "./images/stop.svg";
export default function Meditation({ onGridClick }) {
  const [play, { stop }] = useSound(MeditateSound);
  const [isPlaying, setIsPlaying] = useState(false);
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    onGridClick(0);
  };
  return (
    <div className="containerColumn">
      <div className="bigText">
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
              setIsPlaying(false);
              stop();
              sendit();
            }}
          />
        )}
      </div>
    </div>
  );
}
