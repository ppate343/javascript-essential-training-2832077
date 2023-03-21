/**
 * Create a Backpack object, populate some HTML to display its properties.
 */

// Single line comment

/* Multi-line comment
See! this line is also commented out! */

// const updateBackpack = (update) => {
//   let main = document.querySelector("main"); // main is an element
//   main.innerHTML = markup(backpack);
//   console.info(update);
// };

// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   lidOpen: false,
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//     updateBackpack(`Lid status changed.`);
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//     updateBackpack(`Strap lengths updated.`);
//   },
// };


const updatePC = (update) => {
  let main = document.querySelector('main');
  main.innerHTML = markup(setup);
  console.info(update);
}

const setup = {
  name: "main setup",
  monitor: 2,
  color: "black",
  painting: {
    left: 3,
    right: 2
  },
  pcPower: true,
  togglePower: function (powerStatus) {
    this.pcPower = powerStatus;
    updatePC(`power status changed`);
  }
}

// console.log("The backpack object", backpack)
// console.log("The pocketNum val", backpack.pocketNum)
// console.log("The straplenngth left prop", backpack.strapLength.left)
//if we want to set prop value as var

// do not place var inside dot notaion 
// var query = "pocketNum";

//bracket notation can pass quoted string that passes anything, allows us to parse data

// console.log("The pocketNum val var", backpack[query])

// const markup = (backpack) => {
//   return `
//   <div>
// 	<h3>${backpack.name}</h3>
// 	<ul>
// 	  <li>Volume: ${backpack.volume}</li>
// 	  <li>Color: ${backpack.color}</li>
// 	  <li>Number of pockets: ${backpack.pocketNum}</li>
// 	  <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${backpack.strapLength.right
//     } </li>
// 	  <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
// 	</ul>
//   </div>
// `;
// };

const markup = (setup) => {
  return `
  <div>
	<h3>${setup.name}</h3>
	<ul>
	  <li>Monitors: ${setup.monitor}</li>
	  <li>Color: ${setup.color}</li>
	  <li>Paintings: L: ${setup.painting.left}, R: ${setup.painting.right
    } </li>
	  <li>PC power: ${setup.pcPower ? "On" : "Off"}</li>
	</ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(setup);
document.body.appendChild(main);
