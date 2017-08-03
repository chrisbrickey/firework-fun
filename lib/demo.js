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



  }


}

module.exports = Demo;
