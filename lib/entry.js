// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
// const Firework = require("./firework");
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', () => {
  console.log("i'm on the entry file");

  const bangImage = '@Url.Content("~../images/bang.png")';
  const bustImage = '@Url.Content("~../images/bust.png")';
  const succullent = '@Url.Content("~../images/succullent.png")';

  let myDrawing = new Image();
  myDrawing.src = "./images/succullent.png";



  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  const mainCtx = mainCanvas.getContext("2d");

  // myDrawing.onload = function() {
  //   mainCtx.drawImage(myDrawing, 100, 100);
  // };


  const fireworkCanvas = document.getElementById(canvasID);
  const fireworkCtx = mainCanvas.getContext("2d");

  mainCanvas.addEventListener("click", getClickPosition, false);

  function getClickPosition(event) {
    // console.log("inside getClickPosition");
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    mainCtx.drawImage(myDrawing, xPos, yPos);
    return (xPos, yPos);
  }









});
