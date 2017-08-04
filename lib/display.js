const Firework = require("./firework");

class Display {
  constructor(context, playButton) {
    // this.canvas = canvas;
    this.context = context;
    this.context.globalCompositeOperation = 'source-over';

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
    console.log(this.fireworkArray);
  }


  fireThemAll() {
    console.log(this.fireworkArray);

    for (let i = 0; i < this.fireworkArray.length; i++) {
      this.fireworkArray[i].initiate();
    }

  }


  resetFireworkArray(context) {
    console.log(this.fireworkArray);
    this.fireworkArray = [];
    console.log(this.fireworkArray);
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }


}

module.exports = Display;
