import React, { useState } from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
import Bemerkung from "./Bemerkung";
export default function Grate({ onGridClick }) {
  const [gift, setgift] = useState(undefined);
  const allgrates = [
    "Wishing you all the happiness your holiday can hold!",
    "May your family have a holiday season that is full of wonderful surprises, treats and nonstop laughter.",
    "I wish we could be together this holiday season, but I'm sending warm wishes your way.",
    "I know it's been a hard year for you and your family. I hope the New Year brings better days.",
    "Warmest wishes that you can find in this shadowy time.",
    "Wishing you a Happy New Year with the hope that you will have many blessings in the year to come.",
    "Out with the old, in with the new: may you be happy the whole year through. Happy New Year!",
    "I resolve to stop wasting my resolutions on myself and use them to repay you for the warmth you’ve shown me. Happy New Year!",
    "Nights will be dark but days will be light, wishing your life to be always bright – Happy New Year.",
    "As the New Year dawns, I hope it is filled with the promises of a brighter tomorrow. Happy New Year!",
    "No one can go back in time to change what has happened, so work on your present to make yourself a wonderful future.",
    "Every year we try to diet and exercise. Maybe this year our plans will actually work. Happy New Year, friend.",
    "You made last year so special for me. It is my greatest wish that this coming year be special for you.",
    "I wish you to look forward to the upcoming year with confidence and courage, giving wings to your dreams! Live your life to the fullest extent, Happy New Year!",
    "My sister, my first friend, my constant support: In the coming year, I wish you all of the blessings you truly deserve. I love you, Sis.",
    "To my awesome brother: thank you for the fun and sometimes embarrassing memories we share. Let’s keep that tradition going in the upcoming year. Happy New Year.",
    "Happy New Year, Grandma. I wish you a bright New Year, just like every year you have brightened in my life. Thank you.",
    "Happy new year, my love. I hope that each of my remaining years starts and ends with you.",
    "I love you more today than I loved you yesterday. And I will love you more tomorrow than I love you today. Happy New Year, My Love!",
    "May the New Year bring you happiness, peace, and prosperity. Wishing you a joyous 2021!",
    "Happy new year to the sweetest person alive. Thanks for being in my life.",
    "My only wish for this New Year is that I want to love you more than ever, take care of you more than ever and make you happier more than ever. Happy new year!",
    "I wish to have a year filled with happiness and strength to overcome all the dark hours. You are a true blessing. Happy New Year, love.",
    "Life is full of ups and downs but thanks to you guys, I can never feel down. Thanks for being my support. I love you so much. Happy New Year. May God bless you.",
    "Fresh HOPES, Fresh PLANS, Fresh EFFORTS, Fresh FEELINGS, Fresh COMMITMENT. Welcome 2021 with a fresh ATTITUDE. Happy New Year.",
  ];
  const gratechosen = (i) => {
    Swal.fire({
      title: "Nice!",
      text:
        "Now open your messaging app, paste the copied text there and send your message!",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allgrates[i]);
  };
  return (
    <div className="containerColumnDashed">
      <Timer onGridClick={onGridClick} />
      <Bemerkung />
      <div className="containergrates">
        {allgrates.map((data, i) => {
          return (
            <div
              key={"grates" + i}
              className={"papernotesreihen"}
              onClick={() => gratechosen(i)}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
