// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
// const Firework = require("./firework");
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', () => {
  console.log("i'm on the entry file");

  const canvasID = "myCanvas";


  const mainCanvas = document.getElementById(canvasID);
  const mainCtx = mainCanvas.getContext("2d");

  mainCanvas.addEventListener("click", getClickPosition, false);

  function getClickPosition(event) {
    console.log("inside getClickPosition");
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
}




});
