const Firework = require("./firework");
const Display = require("./display");

class Record {
  constructor (canvas, button, colorArray, display) {

    this.theButton = button;
    this.display = display;

    this.colorArray = colorArray;
    this.pointColor = `rgb(${colorArray[0][0]}, ${colorArray[0][1]}, ${colorArray[0][2]})`

    this.mainCanvas = canvas;
    this.mainContext = this.mainCanvas.getContext("2d");
    this.mainContext.globalCompositeOperation = 'source-over';

    // this.bangCanvas = document.getElementById("myCanvas");
    // this.bangCanvas.width = 2500;
    // this.bangCanvas.height = 2500;
    // this.bangContext = this.bangCanvas.getContext("2d");
    // this.bangContext.globalCompositeOperation = 'source-over';

    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveFirework = this.saveFirework.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the button");
    this.theButton.addEventListener("click", this.setCanvasListener);
  }

  setCanvasListener() {
    console.log("setting a listener on the mainCanvas");
    this.mainCanvas.addEventListener("click", this.saveFirework, false);
  }

  saveFirework(event) {
    // this.clearScreen();
    let xPos = event.clientX;
    let yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);

    // this.clearScreen();
    this.mainContext.drawImage(this.bangImage, (xPos - 0), (yPos + 0), 20, 20);
    // this.clearScreen();

    this.mainCanvas.removeEventListener("click", this.getClickPosition, false);
    let firework = new Firework(this.mainCanvas, this.colorArray, xPos, yPos);
    this.display.addFirework(firework);

  }



  clearScreen() {
    this.mainContext.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.mainContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }


}

module.exports = Record;
