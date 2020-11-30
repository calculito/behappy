import React from "react";
import Swal from "sweetalert2";
import Timer from "./Timer";
export default function Haiku({ onGridClick }) {
  const haikus = [
    "trunks of fairy floss a delicate existence, guardian of all. ",
    "colours fill the sky melted rainbow dripping down falling all on me. ",
    "dark snow the stories hidden in a brain scan ",
    "fontanelle my heart beating in time to hers ",
    "spring rain the puddling of old asphalt ",
    "coupling the lone jetliner tows in the storm ",
    "summer night the house creaks a bedtime story ",
    "cold night a stray cat laps the moon ",
    "crack of dawn one blackbird lifts the grief. ",
    "sewing sky to sea the horizon ",
    "By the great oak tree I bask in solitude thoughts, the only noise",
    "the barren branch impales a full moon",
    "tea leaves she stirs them for something better",
    "our parrot shrieks my father’s name in my mother’s voice",
    "millions of stars my father points out a planet",
    "an old silent pond... a frog jumps into the pond, splash! silence again.",
    "autumn moonlight - a worm digs silently into the chestnut.",
    "in the twilight rain these brilliant-hued hibiscus - a lovely sunset.",
    "a summer river being crossed how pleasing with sandals in my hands!",
    "light of the moon moves west, flowers' shadows creep eastward.",
    "in the moonlight, he color and scent of the wisteria seems far away.",
    "oh snail climb Mount Fuji, but slowly, slowly!",
    "everything I touch with tenderness, alas, pricks like a bramble.",
    "I want to sleep swat the flies softly, please.",
    "after killing a spider, how lonely I feel in the cold of night!",
    "for love and for hate I swat a fly and offer it to an ant.",
    "a mountain village under the piled-up snow the sound of water.",
    "night; and once again, the while I wait for you, cold wind turns into rain.",
    "the summer river: although there is a bridge, my horse goes through the water.",
    "a lightning flash: between the forest trees I have seen water.",
    "the lamp once out cool stars enter the window frame.",
    "the crow has flown away: swaying in the evening sun, a leafless tree.",
    "over the wintry forest, winds howl in rage with no leaves to blow.",
    "the apparition of these faces in the crowd; petals on a wet, black bough.",
    "the taste of rain — why kneel?",
    "love between us is speech and breath. loving you is a long river running.",
    "life’s little, our heads sad. redeemed and wasting clay this chance. be of use.",
    "period one blue egg all summer long now gone",
    "delightful display snowdrops bow their pure white heads to the sun's glory.",
    "like crunchy cornflakes gold leaves rustle underfoot beauty in decay.",
    "the chill, worming in shock, pleasure, bursting within summer tongue awakes",
    "you and me alone madness of world locked away peace and quiet reigns",
    "strokes of affection light and tenderly expressed keep love’s bonds so strong.",
    "calm as a river tranquility in my heart blue summer skies reign.",
    "coolness fills the air scarves and sweaters everywhere fall weather is here",
    "your eyes are fire. their image burnt into my soul, scarred by beauty.",
    "picking up pebbles or seashells strewn on soft sand pure relaxation.",
    "when it's all over what will begin in its place? will it be better?",
    "yellow flame flickers shadows dance upon the wall love grows ever strong.",
    "glorious sunset decorating the night sky... awaiting the moon",
    "rain hits my window angels tap-dancing softly a heavenly sound",
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
  let nr = getRandomInt(0, 50);

  return (
    <div className="containerColumn">
      <Timer onGridClick={onGridClick} />
      <div className="bigText" onClick={sendit}>
        <span className="haiku">{haikus[nr]}</span>
      </div>
    </div>
  );
}
