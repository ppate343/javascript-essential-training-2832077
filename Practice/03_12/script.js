/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


import Canvas from "./Canvas.js";
import Backpack from "./Backpack.js";


const city = new Canvas(
    'blue',
    10,
    "square",
    'cloth',
    true
);

const everydayBackpack = new Backpack(
    "evryday",
    10,
    "blue",
    10,
    15,
    15,
    true,
);

everydayBackpack.toggleLid(false);
console.log(everydayBackpack.lidOpen);
console.log("the backpack colour: ", everydayBackpack.color);
console.log("the city Canvas object: ", city);
console.log("the canvas colour: ", city.colour); 