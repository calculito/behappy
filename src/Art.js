import React from "react";
import Swal from "sweetalert2";
export default function Art({ onGridClick }) {
  const artlinks = [
    "https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80",
    "https://images.unsplash.com/photo-1533502565527-e1bda1ad5969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1463277261818-d24c3cdbe40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1582561424752-9b3fce4d9341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=717&q=80",
    "https://images.unsplash.com/photo-1580136608079-72029d0de130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=676&q=80",
    "https://images.unsplash.com/photo-1579783483346-b4b3f315096b?ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
    "https://images.unsplash.com/photo-1578321926534-133bb2a9f080?ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80",
    "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
    "https://images.unsplash.com/photo-1580136608071-ea92ad6f35a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=908&q=80",
    "https://images.unsplash.com/photo-1494255109162-2f3d1eddb31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1582469566055-ae79af7370d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
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
        src={artlinks[nr]}
        alt={"art"}
        onClick={sendit}
      />
    </div>
  );
}
