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
    // console.log("setting a listener on the play button");
    this.playButton.addEventListener("click", this.fireThemAll);
  }

  addFirework(firework) {
    // console.log("inside addFirework....to the display array");
    this.fireworkArray.push(firework);
  }

  fireThemAll() {
    // console.log("play button clicked, inside 'fireThemAll'");
    // console.log(this.fireworkArray);

    for (let i = 0; i < this.fireworkArray.length; i++) {
      this.fireworkArray[i].initiate();
    }

  }

  resetFireworkArray() {
    this.fireworkArray = [];
  }


}

module.exports = Display;
