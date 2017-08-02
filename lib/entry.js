// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
// const Firework = require("./firework");
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', () => {
  console.log("i'm on the entry file");

  let bangImage = new Image();
  bangImage.src = "./images/bang.png";

  let bustImage = new Image();
  bustImage.src = "./images/bust.png";

  let succullentImage = new Image();
  succullentImage.src = "./images/succullent.png";

  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  const mainCtx = mainCanvas.getContext("2d");

  succullentImage.onload = function() {
    mainCtx.drawImage(succullentImage, 100, 100, 20, 20);
  };


  const fireworkCanvas = document.getElementById(canvasID);
  const fireworkCtx = mainCanvas.getContext("2d");

  mainCanvas.addEventListener("click", getClickPosition, false);

  function getClickPosition(event) {
    // console.log("inside getClickPosition");
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    mainCtx.drawImage(succullentImage, xPos, yPos, 20, 20);
    return (xPos, yPos);
  }









});
