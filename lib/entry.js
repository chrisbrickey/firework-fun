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
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  const mainCtx = mainCanvas.getContext("2d");

  const fireworkCanvas = document.getElementById(canvasID);
  const fireworkCtx = mainCanvas.getContext("2d");

  // succullentImage.onload = function() {
  //   mainCtx.drawImage(succullentImage, 100, 100, 20, 20);
  // };

  mainCanvas.addEventListener("click", getClickPosition, false);

  function getClickPosition(event) {
    //figure out a way to clear the canvas before you do this
    // console.log("inside getClickPosition");
    // mainCtx.clearRect(0, 0, Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    mainCtx.drawImage(succullentImage, xPos, yPos, 20, 20);
    return (xPos, yPos);
  }

  // mainCanvas.addEventListener("click", firework.createFirework, false);










});
