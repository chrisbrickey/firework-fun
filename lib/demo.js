const Firework = require("./firework");

class Demo {
  constructor(button, sound) {
    this.demoButton = button;
    this.playDemo = this.playDemo.bind(this);
    this.sound = sound;
  }

  listenToButton() {
    this.demoButton.addEventListener("click", this.playDemo);
  }

  playDemo() {

    let demoCanvas = document.getElementById("myCanvas");
    demoCanvas.width = document.documentElement.clientWidth;
    demoCanvas.height = document.documentElement.clientHeight;

    let demoContext = demoCanvas.getContext("2d");
    demoContext.globalCompositeOperation = 'source-over';
    demoContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);


    let firework1 = new Firework(null, (demoCanvas.width * 0.8), (demoCanvas.height * 0.4), this.sound);
    firework1.initiate();

    let firework2 = new Firework([[255, 102, 1]], (demoCanvas.width * 0.5), (demoCanvas.height * 0.7), this.sound);
    firework2.initiate();

    let firework3 = new Firework(null, (demoCanvas.width * 0.7), (demoCanvas.height * 0.2), this.sound);
    firework3.initiate();

    let firework4 = new Firework([[1, 255, 1]], (demoCanvas.width * 0.4), (demoCanvas.height * 0.3), this.sound);
    firework4.initiate();

    let firework5 = new Firework([[255, 102, 1]], (demoCanvas.width * 0.3), (demoCanvas.height * 0.8), this.sound);
    firework5.initiate();

    let firework6 = new Firework([[255, 102, 1]], (demoCanvas.width * 0.6), (demoCanvas.height * 0.4), this.sound);
    firework6.initiate();

    let firework7 = new Firework(null, (demoCanvas.width * 0.8), (demoCanvas.height * 0.8), this.sound);
    firework7.initiate();

    demoContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);


  }


}

module.exports = Demo;
