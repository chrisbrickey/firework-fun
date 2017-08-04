const Firework = require("./firework");

class Demo {
  constructor(button) {
    // this.canvas = document.getElementById("myCanvas");
    // this.canvas.width = document.documentElement.clientWidth;
    // this.canvas.height = document.documentElement.clientHeight;
    //
    // this.context = this.canvas.getContext("2d");
    // this.context.globalCompositeOperation = 'source-over';

    this.demoButton = button;

    this.playDemo = this.playDemo.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the demo button");
    this.demoButton.addEventListener("click", this.playDemo);
  }

  playDemo() {
    console.log("inside playDemo");

    let demoCanvas = document.getElementById("myCanvas");
    demoCanvas.width = document.documentElement.clientWidth;
    demoCanvas.height = document.documentElement.clientHeight;

    let context = demoCanvas.getContext("2d");
    context.globalCompositeOperation = 'source-over';


    context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);


    let firework1 = new Firework(demoCanvas, null, 103, 149);
    firework1.initiate();

    let firework2 = new Firework(demoCanvas, [[255, 102, 1]], 721, 119);
    firework2.initiate();

    let firework3 = new Firework(demoCanvas, null, 248, 395);
    firework3.initiate();

    let firework4 = new Firework(demoCanvas, [[1, 255, 1]], 803, 293);
    firework4.initiate();

    let firework5 = new Firework(demoCanvas, [[255, 102, 1]], 332, 467);
    firework5.initiate();

    let firework6 = new Firework(demoCanvas, [[255, 102, 1]], 646, 556);
    firework6.initiate();

    let firework7 = new Firework(demoCanvas, null, 932, 494);
    firework7.initiate();

    context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);


  }


}

module.exports = Demo;
