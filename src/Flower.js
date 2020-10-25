import React from "react";
import Swal from "sweetalert2";
export default function Anger({ onGridClick }) {
  const flowerlinks = [
    "https://images.pexels.com/photos/3750764/pexels-photo-3750764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/1596569/pexels-photo-1596569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4630010/pexels-photo-4630010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1020478/pexels-photo-1020478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/548375/pexels-photo-548375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1076607/pexels-photo-1076607.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1550618/pexels-photo-1550618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
  let nr = getRandomInt(0, 10);

  return (
    <div className="containerColumn">
      <img
        className="bigPicture"
        src={flowerlinks[nr]}
        alt={flower}
        onClick={sendit}
      />
    </div>
  );
}
