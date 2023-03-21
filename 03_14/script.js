/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js"

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);


const sketchBook = new Book(
  "bullet Journal",
  "septembet 5, 2017 15:00:00 PST",
  "hard",
  "grey",
  "art"
)
const scienceBook = new Book(
  "biology",
  "february  9, 2020 15:00:00 PST",
  "soft",
  "black",
  "non-fiction"
)
const mathBook = new Book(
  "calculus",
  "may 4, 2020 15:00:00 PST",
  "hard",
  "blue",
  "non-fiction"
)
const geoBook = new Book(
  "world",
  "March 28, 2020 15:00:00 PST",
  "soft",
  "green",
  "non-fiction"
)
const econBook = new Book(
  "finance",
  "March 30, 2020 15:00:00 PST",
  "soft",
  "purple",
  "non-fiction"
)



console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


console.log("the sketchbook object: ", sketchBook);
console.log("the genre: ", sketchBook.genre);
console.log("Days since published: ", sketchBook.calculateDaysAlive());


console.log("the sciencebook object: ", scienceBook);
console.log("the genre: ", scienceBook.genre);
console.log("Days since published: ", scienceBook.calculateDaysAlive());


console.log("the matbook object: ", mathBook);
console.log("the genre: ", mathBook.genre);
console.log("Days since published: ", mathBook.calculateDaysAlive());


console.log("the geo object: ", geoBook);
console.log("the genre: ", geoBook.genre);
console.log("Days since published: ", geoBook.calculateDaysAlive());


console.log("the econ object: ", econBook);
console.log("the genre: ", econBook.genre);
console.log("Days since published: ", econBook.calculateDaysAlive());

