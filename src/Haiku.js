import React from "react";
import Swal from "sweetalert2";
export default function Haiku({ onGridClick }) {
  const haikus = [
    "trunks of fairy floss a delicate existence, guardian of all. ",
    "colours fill the sky melted rainbow dripping down falling all on me. ",
    "dark snow the stories hidden in a brain scan ",
    "fontanelle my heart beating in time to hers ",
    "spring rain the puddling of old asphalt ",
    "coupling the lone jetliner tows in the storm ",
    "summer night the house creaks a bedtime story ",
    "cold night a stray cat laps the moon ",
    "crack of dawn one blackbird lifts the grief. ",
    "sewing sky to sea the horizon ",
    "By the great oak tree I bask in solitude thoughts, the only noise",
    "the barren branch impales a full moon",
    "tea leaves she stirs them for something better",
    "our parrot shrieks my father’s name in my mother’s voice",
    "millions of stars my father points out a planet",
  ];
  const sendit = () => {
    Swal.fire({
      title: "Perfect!",
      text: "We hope you feel better now...",
      icon: "success",
      confirmButtonText: "Yes, I do...",
    });
    onGridClick(0);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 15);

  return (
    <div className="containerColumn">
      <div className="bigText" onClick={sendit}>
        <span className="haiku">{haikus[nr]}</span>
      </div>
    </div>
  );
}
