import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";

export default function Word({ onGridClick }) {
  const words = [
    "https://www.thefreedictionary.com/headquarter",
    "https://www.thefreedictionary.com/embed",
    "https://www.thefreedictionary.com/malarkey",
    "https://www.thefreedictionary.com/emissary",
    "https://www.thefreedictionary.com/representative",
    "https://www.thefreedictionary.com/authority",
    "https://www.thefreedictionary.com/reintroducing",
    "https://www.thefreedictionary.com/company",
    "https://www.thefreedictionary.com/scientist",
    "https://www.thefreedictionary.com/biotech",
    "https://www.thefreedictionary.com/manipulation",
    "https://www.thefreedictionary.com/poppycock",
    "https://www.thefreedictionary.com/Serendipity",
    "https://www.thefreedictionary.com/Gobbledygook",
    "https://www.thefreedictionary.com/Scrumptious",
    "https://www.thefreedictionary.com/Halfpace",
    "https://www.thefreedictionary.com/Impignorate",
    "https://www.thefreedictionary.com/antichlor",
    "https://www.thefreedictionary.com/Nudiustertian",
    "https://www.thefreedictionary.com/diplomacy",
    "https://www.thefreedictionary.com/agreement",
    "https://www.thefreedictionary.com/Vernacular",
    "https://www.thefreedictionary.com/distinguished",
    "https://www.thefreedictionary.com/eminent",
    "https://www.thefreedictionary.com/inherent",
    "https://www.thefreedictionary.com/character",
    "https://www.thefreedictionary.com/distinctive",
    "https://www.thefreedictionary.com/attractive",
    "https://www.thefreedictionary.com/profitable",
    "https://www.thefreedictionary.com/Yielding",
    "https://www.thefreedictionary.com/docile",
    "https://www.thefreedictionary.com/tractable",
    "https://www.thefreedictionary.com/malleable",
    "https://www.thefreedictionary.com/pressure",
    "https://www.thefreedictionary.com/distress",
    "https://www.thefreedictionary.com/assistance",
  ];
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 35);
  return (
    <div className="containerColumn" onClick={sendit}>
      <Timer onGridClick={onGridClick} />

      <iframe
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        id="sandboxed"
        className="bigPicture"
        src={words[nr]}
        width="100%"
        height="90%"
        title="dictionary"
      ></iframe>
    </div>
  );
}
