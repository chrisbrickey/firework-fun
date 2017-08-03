const Firework = require("./firework");

class Display {
  constructor(canvas, playButton) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.playButton = playButton;
    this.fireworkArray = [];

    this.addFirework = this.addFirework.bind(this);
    this.fireThemAll = this.fireThemAll.bind(this);
  }

  listenToButton() {
    console.log("setting a listener on the play button");
    this.playButton.addEventListener("click", this.fireThemAll);
  }

  addFirework(firework) {
    this.fireworkArray.push(firework);
  }

  fireThemAll() {

    for (let i = 0; i < this.fireworkArray.lenght; i++) {

    }

  }


}

module.exports = Display;
