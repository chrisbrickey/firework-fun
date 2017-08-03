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

    let firework1 = new Firework(this.canvas);
    firework1.initiate(103, 149);

    let firework2 = new Firework(this.canvas);
    firework2.initiate(721, 119);
    
    // let firework3 = new Firework(this.canvas);
    // firework3.initiate(248, 395);
    //
    // let firework4 = new Firework(this.canvas);
    // firework4.initiate(803, 293);
    //
    // let firework5 = new Firework(this.canvas);
    // firework5.initiate(332, 467);
    //
    // let firework6 = new Firework(this.canvas);
    // firework6.initiate(646, 556);
    //
    // let firework7 = new Firework(this.canvas);
    // firework7.initiate(932, 494);


  }


}

module.exports = Demo;
