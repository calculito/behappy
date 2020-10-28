import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
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
    "'Some people never go crazy. What truly horrible lives they must lead.'― Charles Bukowski",
    "'Act as if what you do makes a difference. It does.' - Wiliam James",
    "'Success is not final, failure is not fatal: it is the courage to continue that counts.' - Winston Churchill",
    "'Never bend your head. Always hold it high. Look the world straight in the eye.' - Helen Keller",
    "'What you get by achieving your goals is not as important as what you become by achieving your goals.' - Zig Ziglar",
    "'Believe you can and you're halfway there.' - Theodore Roosevelt",
    "'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.' - Jimmy Dean",
    "'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.' - William James",
    "'Limit your 'always' and your 'nevers.'' - Amy Poehler",
    "'Nothing is impossible. The word itself says 'I'm possible!'' - Audrey Hepburn",
    "'Sometimes you will never know the value of a moment, until it becomes a memory.' - Dr. Seuss",
    "'Happiness often sneaks in through a door you didn't know you left open.' - John Barrymore",
  ];
  const sendit = () => {
    Swal.fire({
      title: "Please!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 25);

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="bigText" onClick={sendit}>
        <span className="haiku">{haikus[nr]}</span>
      </div>
    </div>
  );
}
