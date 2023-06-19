// Desc: Utility functions
import oneLetter from "./data/words/oneLetter.js";
import twoLetter from "./data/words/twoLetter.js";
import threeLetter from "./data/words/threeLetter.js";
import fourLetter from "./data/words/fourLetter.js";
import fiveLetter from "./data/words/fiveLetter.js";
import sixLetter from "./data/words/sixLetter.js";
import sevenLetter from "./data/words/sevenLetter.js";
import eightLetter from "./data/words/eightLetter.js";
import nineLetter from "./data/words/nineLetter.js";
import tenLetter from "./data/words/tenLetter.js";

export default function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export const wordsSizedList = {
  1: oneLetter,
  2: twoLetter,
  3: threeLetter,
  4: fourLetter,
  5: fiveLetter,
  6: sixLetter,
  7: sevenLetter,
  8: eightLetter,
  9: nineLetter,
  10: tenLetter,
};
