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

  listen() {
    // console.log("in the listen method of record");
    this.theButton.addEventListener("click", this.saveRecord);
  }

  saveRecord() {
      console.log("I'm in the listen method of firework!");
      this.canvas.addEventListener("click", this.getClickPosition, false);



    let firework = new Firework(this.canvas);
    firework.listen();

    //this gets rid of all references to this instance of the of the firework so can't be fired again
    // delete firework

  }

  getClickPosition(event) {
    // this.clearScreen();
    let xPos = event.clientX;
    let yPos = event.clientY;
    this.initiate(xPos, yPos);
    // return {x: xPos, y: yPos};
  }

  playRecord() {

  }

  clearScreen() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }


}

module.exports = Record;
