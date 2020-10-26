import React from "react";
import Swal from "sweetalert2";
export default function Quote({ onGridClick }) {
  const haikus = [
    "'I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.'― Marilyn Monroe ",
    "'Be yourself; everyone else is already taken.'― Oscar Wilde ",
    "'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'― Bernard M. Baruch",
    "'You only live once, but if you do it right, once is enough.'― Mae West",
    "'In three words I can sum up everything I've learned about life: it goes on.'― Robert Frost",
    "'If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.'― J.K. Rowling, Harry Potter and the Goblet of Fire",
    "'Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend'― Albert Camus",
    "'If you tell the truth, you don't have to remember anything.'― Mark Twain",
    "'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'― Maya Angelou",
    "'Always forgive your enemies; nothing annoys them so much.'― Oscar Wilde",
    "'We accept the love we think we deserve.'― Stephen Chbosky, The Perks of Being a Wallflower",
    "'Insanity is doing the same thing, over and over again, but expecting different results.'― Narcotics Anonymous",
    "'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'― Helen Keller",
    "'The difference between genius and stupidity is: genius has its limits.'― Alexandre Dumas-fils",
    "'Some people never go crazy. What truly horrible lives they must lead.― Charles Bukowski",
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
  let nr = getRandomInt(0, 16);

  return (
    <div className="containerColumn">
      <div className="bigText" onClick={sendit}>
        <span className="haiku">{haikus[nr]}</span>
      </div>
    </div>
  );
}
