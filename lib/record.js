const Firework = require("./firework");
const Display = require("./display");

class Record {
  constructor (canvas, button, colorArray, display) {

    this.recordCanvas = canvas;
    this.recordCanvas.width = document.documentElement.clientWidth;
    this.recordCanvas.height = document.documentElement.clientHeight;

    this.recordContext = this.recordCanvas.getContext("2d");
    this.recordContext.globalCompositeOperation = 'source-over';

    this.theButton = button;
    this.display = display;

    this.colorArray = colorArray;
    this.pointColor = `rgb(${colorArray[0][0]}, ${colorArray[0][1]}, ${colorArray[0][2]})`;

    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveFirework = this.saveFirework.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the button");
    this.theButton.addEventListener("click", this.setCanvasListener);
  }

  setCanvasListener() {
    console.log("setting a listener on the mainCanvas");
    this.recordCanvas.addEventListener("click", this.saveFirework, false);
  }

  saveFirework(event) {

    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);

    this.recordContext.drawImage(this.bangImage, (xPos - 0), (yPos + 0), 20, 20);
    this.recordCanvas.removeEventListener("click", this.getClickPosition, false);
    let firework = new Firework(this.colorArray, xPos, yPos);
    this.display.addFirework(firework);

  }


}

module.exports = Record;
