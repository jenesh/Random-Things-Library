// Desc: Utility functions
import oneLetter from "./data/words/oneLetter";
import twoLetter from "./data/words/twoLetter";
import threeLetter from "./data/words/threeLetter";
import fourLetter from "./data/words/fourLetter";
import fiveLetter from "./data/words/fiveLetter";
import sixLetter from "./data/words/sixLetter";
import sevenLetter from "./data/words/sevenLetter";
import eightLetter from "./data/words/eightLetter";
import nineLetter from "./data/words/nineLetter";
import tenLetter from "./data/words/tenLetter";

export default function randomNumber(num = 100) {
  return Math.floor(Math.random() * num);
}

type WordsSizedList = {
  [key: number]: string[];
};

export const wordsSizedList: WordsSizedList = {
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
