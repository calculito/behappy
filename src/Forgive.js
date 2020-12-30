import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
import TakeMeOut from "./TakeMeOut";
import Bemerkung from "./Bemerkung";
export default function Forgive({ onGridClick }) {
  const allforgives = [
    "To err is human, to forgive divine! Maybe not quite, but I forgive you!",
    "I forgive you but trust must be earned anew.",
    "I wish I could give you my pain just for one moment. Not to hurt you, but so that you could finally understand how much you hurt me. Still, I forgive you!",
    "You hurt me very much, now you should try to make it right again.",
    "I forgive you, you know not what you have done.",
    "I forgive you, not because you deserve it, but because carrying you on my mind is a burden.",
    "I forgive you, you did not see right from wrong.",
    "I forgive you... for treating me the way you felt about yourself.",
    "I forgive you. Not for you, but for me.",
    "I forgive you... from my heart i know... if you had known better you would have done better...",
    "I forgive you, you forgive me.",
    "I forgive you. Just don't let it ever happen again.",
    "I decided to forgive you. Only because my soul deserves peace.",
    "I never knew how strong I was, until I had to forgive you and pretend that it never happened.",
    "If you’ve been brave enough to apologize, then I’m strong enough to forgive.",
    "I forgive you, because I want to hold on to what we have, rather than remember it as what we had.",
    "I’m not saying that what you’ve done is ok… I’m saying that I believe you, when you say that you’ll never do it again. I forgive you.",
    "You hurt me in a way that I never would have imagined. But I don’t want to spend the rest of my life hating someone I love from deep down inside my heart. I forgive you.",
    "I forgive you, not because I’m weak but because I’m strong enough to let go of the past.",
    "I forgive you, not because I am ok with what you did, but because I need to move on.",
    "Sometimes the burden of forgiveness is easier to carry than the burden of living life without the person you love. And that’s why, I’m willing to put the past behind.",
    "Just because bad things happen, we don’t lose faith in the heavens above. Just because my heart has been broken, I will not stop believe in love. I forgive you.",
  ];
  const forgiveschosen = (i) => {
    Swal.fire({
      title: "Nice!",
      text:
        "Now open your messaging app, paste the copied text there and send your message!",
      confirmButtonText: "OK",
    });
    navigator.clipboard.writeText(allforgives[i]);
  };
  return (
    <div className="containerColumnDashed">
      <Timer onGridClick={onGridClick} />
      <TakeMeOut onGridClick={onGridClick} />
      <Bemerkung />
      <div className="containergrates">
        {allforgives.map((data, i) => {
          return (
            <div
              key={"forgives" + i}
              className={"papernotesreihen"}
              onClick={() => forgiveschosen(i)}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
