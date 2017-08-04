const Firework = require("./firework");

class Display {
  constructor(canvas, playButton) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.playButton = playButton;
    this.fireworkArray = [];

    this.addFirework = this.addFirework.bind(this);
    this.fireThemAll = this.fireThemAll.bind(this);
    this.resetFireworkArray = this.resetFireworkArray.bind(this);
  }


  listenToButton() {
    this.playButton.addEventListener("click", this.fireThemAll);
  }


  addFirework(firework) {
    this.fireworkArray.push(firework);
  }


  fireThemAll() {

    for (let i = 0; i < this.fireworkArray.length; i++) {
      this.fireworkArray[i].initiate();
    }

  }


  resetFireworkArray() {
    this.fireworkArray = [];
  }


}

module.exports = Display;
