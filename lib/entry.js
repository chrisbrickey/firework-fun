// const requestAnimFrame = require("./requestAnimFrame");
const Demo = require("./demo");
const Display = require("./display");
const Firework = require("./firework");
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

  // let mainCanvas = document.getElementById("myCanvas");
  // mainCanvas.width = document.documentElement.clientWidth;
  // mainCanvas.height = document.documentElement.clientHeight;
  // let mainContext = mainCanvas.getContext("2d");
  // mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  // let firework = new Firework(mainCanvas);
  // firework.listen();

  // let playButton = document.getElementById("play-pause");
  // let theDisplay = new Display(mainCanvas, playButton);
  // theDisplay.listenToButton();
  //
  // let resetButton = document.getElementById("reset");
  // resetButton.addEventListener("click", theDisplay.resetFireworkArray);

  let demoButton = document.getElementById("demo");
  let demo = new Demo(demoButton);
  demo.listenToButton();



  // let button1 = document.getElementById("F1");
  // let record1 = new Record(mainCanvas, button1,[[255, 102, 1]], theDisplay);
  // record1.listenToButton();
  //
  // let button2 = document.getElementById("F2");
  // let record2 = new Record(mainCanvas, button2,[[255, 255, 1]], theDisplay);
  // record2.listenToButton();
  //
  // let button3 = document.getElementById("F3");
  // let record3 = new Record(mainCanvas, button3,[[1, 255, 1]], theDisplay);
  // record3.listenToButton();
  //
  // let button4 = document.getElementById("F4");
  // let record4 = new Record(mainCanvas, button4,[[1, 102, 255]], theDisplay);
  // record4.listenToButton();
  //
  // let button5 = document.getElementById("F5");
  // let record5 = new Record(mainCanvas, button5,[[255, 51, 153]], theDisplay);
  // record5.listenToButton();
  //
  // let button6 = document.getElementById("F6");
  // let record6 = new Record(mainCanvas, button6,[[255, 1, 1], [1, 255, 1], [1, 1, 255]], theDisplay);
  // record6.listenToButton();



  // let muteButton = document.getElementById('mute');
  // muteButton.onclick = mutePage();

  function mutePage() {
    let audios = document.querySelectorAll("button");
    [].forEach.call(audios, function(audio) { muteMe(audio); });
  }

  function muteMe(elem) {
    elem.muted = true;
    elem.pause();
  }

});
