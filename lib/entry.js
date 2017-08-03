// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
const Firework = require("./firework");
// const Matter = require("./matter");
// const Pellet = require("./pellet");
const Record = require("./record");



document.addEventListener('DOMContentLoaded', () => {


  //credit for requestAnimFrame: Paul Irish
  // window.requestAnimFrame = (function(){
  //   return  window.requestAnimationFrame       ||
  //           window.webkitRequestAnimationFrame ||
  //           window.mozRequestAnimationFrame    ||
  //           window.oRequestAnimationFrame      ||
  //           window.msRequestAnimationFrame     ||
  //           function( callback ){
  //             window.setTimeout(callback, 1000 / 60);
  //           };
  // })();


  console.log("i'm on the entry file");

  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  // let firework = new Firework(mainCanvas);
  // firework.listen();

  let button1 = document.getElementById("F1");
  let record1 = new Record(mainCanvas, button1);
  record1.listen();
});
