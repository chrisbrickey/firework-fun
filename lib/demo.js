const Firework = require("./firework");

class Demo {
  constructor(canvas, button) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.demoButton = button;

    this.playDemo = this.playDemo.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the demo button");
    this.demoButton.addEventListener("click", this.playDemo);
  }

  playDemo() {
    console.log("inside playDemo");

    let firework1 = new Firework(this.canvas, null, 103, 149);
    firework1.initiate();

    let firework2 = new Firework(this.canvas, null, 721, 119);
    firework2.initiate();

    let firework3 = new Firework(this.canvas, null, 248, 395);
    firework3.initiate();

    let firework4 = new Firework(this.canvas, null, 803, 293);
    firework4.initiate();

    let firework5 = new Firework(this.canvas, null, 332, 467);
    firework5.initiate();

    let firework6 = new Firework(this.canvas, null, 646, 556);
    firework6.initiate();

    let firework7 = new Firework(this.canvas, null, 932, 494);
    firework7.initiate();


  }


}

module.exports = Demo;
