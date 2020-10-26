import React from "react";
import Swal from "sweetalert2";

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
  let nr = getRandomInt(0, 19);
  return (
    <div className="containerColumn" onClick={sendit}>
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
