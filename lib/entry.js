// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
const Firework = require("./firework");
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', () => {
  console.log("i'm on the entry file");

  // let bangImage = new Image();
  // bangImage.src = "./images/bang.png";
  //
  // let bustImage = new Image();
  // bustImage.src = "./images/bust.png";

  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  let firework = new Firework(mainCanvas);
  firework.listen();

  // const mainCtx = mainCanvas.getContext("2d");

  // const fireworkCanvas = document.getElementById(canvasID);
  // const fireworkCtx = mainCanvas.getContext("2d");

  // mainCanvas.addEventListener("click", getClickPosition, false);

  // function getClickPosition(event) {
  //   mainCtx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)
  //   let xPos = event.clientX;
  //   let yPos = event.clientY;
  //   // console.log(xPos);
  //   // console.log(yPos);
  //   mainCtx.drawImage(bangImage, xPos, yPos, 20, 20);
  //   return (xPos, yPos);
  // }

  // mainCanvas.addEventListener("click", firework.createFirework, false);



});
