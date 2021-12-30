import amogus from "./images/amogus.png";
import voda from "./images/voda.png";
import hat from "./images/hat.png";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const images = [amogus, voda, hat];

const arr = [];

for (let i = 0; i < 2000; i++) {
  arr.push({
    id: i,
    title: lorem.generateWords(1),
    description: Math.floor(Math.random() * 10000),
    image: images[Math.floor(Math.random() * 3)],
  });
}

export default arr;
