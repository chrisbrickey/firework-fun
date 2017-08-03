const Firework = require("./firework");

class Record {
  constructor (canvas, button) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.theButton = button;

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.playRecord = this.playRecord.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the button");
    this.theButton.addEventListener("click", this.setCanvasListener);
  }

  setCanvasListener() {
    console.log("setting a listener on the canvas");
    this.canvas.addEventListener("click", this.getClickPosition, false);
  }

  getClickPosition(event) {
    // this.clearScreen();
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    this.canvas.removeEventListener("click", this.getClickPosition, false);
    let firework = new Firework(this.canvas);
    firework.initiate(xPos, yPos);
    // return {x: xPos, y: yPos};
  }

  saveRecord() {

  }

  playRecord() {
    //this gets rid of all references to this instance of the of the firework so can't be fired again
    // delete firework
  }

  clearScreen() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }


}

module.exports = Record;
