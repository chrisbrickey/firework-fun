const Firework = require("./firework");
const Display = require("./display");

class Record {
  constructor (canvas, context, button, colorArray, display, sound) {

    this.recordCanvas = canvas;
    this.recordCanvas.height = document.documentElement.clientHeight * 0.97;

    this.recordContext = context;
    this.recordContext.globalCompositeOperation = 'source-over';

    this.theButton = button;
    this.display = display;

    this.colorArray = colorArray;
    this.pointColor = `rgb(${colorArray[0][0]}, ${colorArray[0][1]}, ${colorArray[0][2]})`;

    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.sound = sound;

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveFirework = this.saveFirework.bind(this);
  }

  listenToButton() {
    this.theButton.addEventListener("click", this.setCanvasListener);
  }

  setCanvasListener() {
    this.recordCanvas.addEventListener("click", this.saveFirework, false);
  }

  saveFirework(event) {
    this.recordCanvas.removeEventListener("click", this.saveFirework, false);

    let xPos = event.clientX;
    let yPos = event.clientY;

    if (yPos > 500) {
      yPos = yPos + 20;
    }

    let adjustment = 0;

    this.recordContext.beginPath();
    this.recordContext.arc((xPos - adjustment), (yPos + adjustment), 10, 0, 2 * Math.PI, false);
    this.recordContext.fillStyle = this.pointColor;
    this.recordContext.fill();

    this.recordContext.drawImage(this.bustImage, (xPos - adjustment - 10), (yPos + adjustment - 10), 20, 20);

    let firework = new Firework(this.colorArray, xPos, yPos, this.sound);
    this.display.addFirework(firework);

  }


}

module.exports = Record;
