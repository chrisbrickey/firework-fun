const Firework = require("./firework");
const Display = require("./display");

class Record {
  constructor (canvas, button, colorArray, display) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.theButton = button;
    this.colorArray = colorArray;
    this.display = display;

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveFirework = this.saveFirework.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the button");
    this.theButton.addEventListener("click", this.setCanvasListener);
  }

  setCanvasListener() {
    console.log("setting a listener on the canvas");
    this.canvas.addEventListener("click", this.saveFirework, false);
  }

  saveFirework(event) {
    // this.clearScreen();
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    this.canvas.removeEventListener("click", this.getClickPosition, false);
    let firework = new Firework(this.canvas, this.colorArray, xPos, yPos);
    this.display.addFirework(firework);

    // firework.initiate();
  }

  clearScreen() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }


}

module.exports = Record;
