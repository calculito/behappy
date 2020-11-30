import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Quote({ onGridClick }) {
  const quotes = [
    "'I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.'",
    "'Be yourself; everyone else is already taken.'",
    "'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'",
    "'You only live once, but if you do it right, once is enough.'",
    "'In three words I can sum up everything I've learned about life: it goes on.'",
    "'If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.'",
    "'Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend'",
    "'If you tell the truth, you don't have to remember anything.'",
    "'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'",
    "'Always forgive your enemies; nothing annoys them so much.'",
    "'We accept the love we think we deserve.'",
    "'Insanity is doing the same thing, over and over again, but expecting different results.'",
    "'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'",
    "'The difference between genius and stupidity is: genius has its limits.'",
    "'Some people never go crazy. What truly horrible lives they must lead.'",
    "'Act as if what you do makes a difference. It does.'",
    "'Success is not final, failure is not fatal: it is the courage to continue that counts.'",
    "'Never bend your head. Always hold it high. Look the world straight in the eye.'",
    "'What you get by achieving your goals is not as important as what you become by achieving your goals.'",
    "'Believe you can and you're halfway there.'",
    "'I can't change the direction of the wind, but I can adjust my sails to always reach my destination.'",
    "'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.'",
    "'Limit your 'always' and your 'nevers.''",
    "'Nothing is impossible. The word itself says 'I'm possible!''",
    "'Sometimes you will never know the value of a moment, until it becomes a memory.'",
    "'Happiness often sneaks in through a door you didn't know you left open.'",
  ];
  const authors = [
    "Marilyn Monroe ",
    "Oscar Wilde ",
    "Bernard M. Baruch",
    "Mae West",
    "Robert Frost",
    "J.K. Rowling, Harry Potter and the Goblet of Fire",
    "Albert Camus",
    "Mark Twain",
    "Maya Angelou",
    "Oscar Wilde",
    "Stephen Chbosky, The Perks of Being a Wallflower",
    "Narcotics Anonymous",
    "Helen Keller",
    "Alexandre Dumas-fils",
    "Charles Bukowski",
    "Wiliam James",
    "Winston Churchill",
    "Helen Keller",
    "Zig Ziglar",
    "Theodore Roosevelt",
    "Jimmy Dean",
    "William James",
    "Amy Poehler",
    "Audrey Hepburn",
    "Dr. Seuss",
    "John Barrymore",
  ];
  const sendit = () => {
    Swal.fire({
      title: "C'mon!",
      text: `You only have a couple of seconds left...`,
      confirmButtonText: "ok...",
    });
  };
  // number in getRandomInt = array.length - 1
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  let nr = getRandomInt(0, 25);

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="bigTextcolumn" onClick={sendit}>
        <span className="quoteitalic">{quotes[nr]}</span>
        <span className="quoteauthor">{authors[nr]}</span>
      </div>
    </div>
  );
}
