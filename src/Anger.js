import React, { useState } from "react";
import Timer from "./Timer";
import Swal from "sweetalert2";
export default function Anger({ onGridClick }) {
  const allangers = [
    "I know, sometimes the cost of an impulsive and angry reaction can be so large that you wouldn’t able to buy your words or actions back even if you were a billionaire. So, I won't say FUCK YOU!",
    "Sometimes it is easier to repair a broken wall than to mend a broken relationship. Sometimes it is not. However, we need a new flat.",
    "I would like to answer you RIGHT NOW but I just decided to take a walk.",
    "You'll get the answer as soon as I calmed down.",
    "I know you're waiting for an answer, but I have to punch the ball for the next two hours. PS: please, try to stay away.",
    "Do you know 'Before he cheats' by Carrie Underwood? That's so strange, they play it now for the third time in a row.",
    "Whatever you just tried to tell me, can you repeat it in a way that doesn't make me angry?",
    "At this moment I am observing my feelings of anger are present.",
    "I didn't quite get it. There is a certain reason for your unclarity?",
    "I appreciate your words, now I would appreciate your silence.",
    "For the moment I have very natural and healthy feelings, like... ANGER.",
    "Accidents and mistakes can happen everyday and to everyone, let's try to fix the problem.",
    "Any attempt to communicate in my usual rational and cool way would fail right now. Give me some time.",
    "My brain is quite emotional at the moment. Waiting to see things more clearly again.",
    "I don't know exactly if I'm sad or hurt or something else. Let me find that out.",
    "I don't want to blame you. Maybe I am just hungry, tired, overworked, stressed or simply unhappy and you're only my FUCKING or EVEN NOT HUSBAND!",
    "Let me see if I'm still angry after I change the perspective over the situation.",
    "Can you please tell me WHY you're doing WHAT you're doing? I really mean it, I wish to understand.",
    "Give me the time and the opportunity to build up the respect and the consideration you think you deserve.",
    "Share with me your perspective, I will do the same with mine, since I think there is a discrepancy.",
    "I don't want to ignore you, but for the moment might be the best thing for both of us.",
    "I don't really feel great. How do you feel?",
  ];
  const angerchosen = (i) => {
    Swal.fire({
      title: "Nice!",
      text:
        "Now open your messaging app, paste the copied text there and send your message!",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allangers[i]);
  };
  return (
    <div className="containerColumnDashed">
      <Timer onGridClick={onGridClick} />
      <br></br>
      <br></br>
      <br></br>
      <div style={{ textAlign: "center", fontSize: "18px" }}>
        <span>Click on your favourite text to copy it to the clipboard.</span>
      </div>
      <div className="containergrates">
        {allangers.map((data, i) => {
          return (
            <div
              key={"angers" + i}
              className={"papernotesreihen"}
              onClick={() => angerchosen(i)}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
