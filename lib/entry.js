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

  let button2 = document.getElementById("F2");
  let record2 = new Record(mainCanvas, button2);
  record2.listen();

  let button3 = document.getElementById("F3");
  let record3 = new Record(mainCanvas, button3);
  record3.listen();

  let button4 = document.getElementById("F4");
  let record4 = new Record(mainCanvas, button4);
  record4.listen();

  let button5 = document.getElementById("F5");
  let record5 = new Record(mainCanvas, button5);
  record5.listen();




  let muteButton = document.getElementById('mute');
  muteButton.onclick = mutePage();

  function mutePage() {
    let audios = document.querySelectorAll("button");
    [].forEach.call(audios, function(audio) { muteMe(audio); });
  }

  function muteMe(elem) {
    elem.muted = true;
    elem.pause();
  }

});
