/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */


// modifying element classes
//className property of the element interface gerts and sets the value of the class attribute of the specified element 

const heading = document.querySelector("h1")
heading.className = "new-class"
console.log(heading.className);

//adding class to image 

const image = document.querySelector("img")
image.classList.add("new-image-class");
console.log(image.className);


// adding class to existing element class

const headingTwo = document.querySelector("h2");
headingTwo.classList.add("new-heading-class-2")
console.log(headingTwo.className)


// removing class to existing element class

headingTwo.classList.remove("new-heading-class-2");
console.log(headingTwo.className);

// adding, removing, modifying attributes 

image.setAttribute("alt", "drawing of a backpack");
image.setAttribute("title", "this image has a title???");
image.removeAttribute("title");
console.log(image.attributes)


// adding, removing, modifying inline styles 
const frog = document.querySelector(".backpack__name");
frog.style.color = "pink";