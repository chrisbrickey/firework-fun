const Demo = require("./demo");
const Display = require("./display");
const Firework = require("./firework");
const Record = require("./record");

document.addEventListener('DOMContentLoaded', () => {

  let muteIcon = document.getElementById("mute-icon");


  document.getElementById("muteButton").addEventListener("click", function (event) {
    if ( fireworkSound.muted ) {
      fireworkSound.muted = false;
      event.target.innerHTML = "mute";
      muteIcon.src = "https://res.cloudinary.com/dckkkjkuz/image/upload/v1501871178/fireworks/001-muted.png";
    }
    else {
      fireworkSound.muted = true;
      event.target.innerHTML = "unmute";
      muteIcon.src = "https://res.cloudinary.com/dckkkjkuz/image/upload/v1501871182/fireworks/002-microphone.png";
    }
  });

  let mainCanvas = document.getElementById("myCanvas");
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;
  let mainContext = mainCanvas.getContext("2d");
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  let fireworkSound = new Audio("./lib/fireworkSound.mp3");
  fireworkSound.muted = false;

  let playButton = document.getElementById("play-pause");
  let theDisplay = new Display(mainContext, playButton);
  theDisplay.listenToButton();

  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", theDisplay.resetFireworkArray);

  let demoButton = document.getElementById("demo");
  let demo = new Demo(demoButton, fireworkSound);
  demo.listenToButton();


  let button1 = document.getElementById("F1");
  let record1 = new Record(mainCanvas, mainContext, button1,[[255, 102, 1]], theDisplay, fireworkSound);
  record1.listenToButton();

  let button2 = document.getElementById("F2");
  let record2 = new Record(mainCanvas, mainContext, button2,[[255, 255, 1]], theDisplay, fireworkSound);
  record2.listenToButton();

  let button3 = document.getElementById("F3");
  let record3 = new Record(mainCanvas, mainContext, button3,[[1, 255, 1]], theDisplay, fireworkSound);
  record3.listenToButton();

  let button4 = document.getElementById("F4");
  let record4 = new Record(mainCanvas, mainContext, button4,[[1, 102, 255]], theDisplay, fireworkSound);
  record4.listenToButton();

  let button5 = document.getElementById("F5");
  let record5 = new Record(mainCanvas, mainContext, button5,[[255, 51, 153]], theDisplay, fireworkSound);
  record5.listenToButton();

  let button6 = document.getElementById("F6");
  let record6 = new Record(mainCanvas, mainContext, button6, [[211, 211, 211], [255, 51, 153], [255, 255, 1]], theDisplay, fireworkSound);
  record6.listenToButton();



  function updateCanvasContext() {
    mainCanvas.width = document.documentElement.clientWidth;
    mainCanvas.height = document.documentElement.clientHeight;
  }

  window.addEventListener("resize", updateCanvasContext);



});
