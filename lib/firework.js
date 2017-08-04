const Pellet = require("./pellet");

class Firework {
  constructor(colorArray, Xcoor, Ycoor) {
    //prob should change this to a brand new canvas by passing in the 'canvasID' instead of the canvas itself
    // this.canvas = canvas;
    // this.context = canvas.getContext("2d");
    // this.context.globalCompositeOperation = 'source-over';

    this.Xcoor = Xcoor;
    this.Ycoor = Ycoor;

    this.pelletArray = [];
    this.colors = colorArray || [[211, 211, 211], [255, 51, 153], [255, 255, 1]];
    // this.centerX = this.canvas.width/2;
    // this.centerY = this.canvas.height/2;
    this.fireworkInnerRadius = 5;
    this.pelletRadius = 3;

    this.initiate = this.initiate.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoop = this.animateWithLoop.bind(this);
    // this.clearScreen = this.clearScreen.bind(this);

  }


  initiate() {
    let fireworkSound = new Audio("./lib/fireworkSound.mp3");
    fireworkSound.play();

    let adjustment = 0;
    this.buildPelletArray(this.Xcoor - adjustment, this.Ycoor + adjustment);
    this.animateWithLoop();
  }


  buildPelletArray(startX, startY) {

    let load = this.pelletArray.length;
    let numColors = this.colors.length;
    let alpha = 1.0;

    for(let i = 0; i < 200; i++) {
      //consider making both x and y change with random numbers instead of the same random number
      let p = Math.random();
      let x = startX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
      let y = startY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);
      let colorValues = this.colors[Math.floor(i % numColors)];

      let pellet = new Pellet(x, y, this.pelletRadius, colorValues[0], colorValues[1], colorValues[2], alpha);
      this.pelletArray.push(pellet);
    }

  }


  animateWithLoop() {
    console.log("inside animate with Loop");

    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;
    console.log("viewWidth:", viewWidth);
    console.log("viewHeigh:", viewHeight);

    let fireCanvas = document.getElementById("myCanvas");
    fireCanvas.width = document.documentElement.clientWidth;
    fireCanvas.height = document.documentElement.clientHeight;

    let fireContext = fireCanvas.getContext("2d");
    fireContext.globalCompositeOperation = 'source-over';
    fireContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

    let x = this;
    let fade = 0;
    let counter = 0;
    let numIterations = 300;
    let z = setInterval(function(){

        fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
        fireContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

        for(let i = 0; i < x.pelletArray.length; i++) {
          let pelote = x.pelletArray[i];
          let newAlpha = pelote.alpha - fade;
          let negPos = [-1, 1][Math.floor(Math.random()) * 2];

          fireContext.beginPath();
          fireContext.arc((pelote.x + (counter * 3 * [-1, 1][Math.floor(Math.random()) * 2] * Math.random())), (pelote.y + (counter * 2 * [-1, 1][Math.floor(Math.random()) * 2] * Math.random())), pelote.pelletRadius, 0, 2 * Math.PI, false);
          fireContext.fillStyle = `rgba(${pelote.red}, ${pelote.green}, ${pelote.blue}, ${newAlpha})`;
          fireContext.fill();

        }

        counter++;
        if (fade < 1){
          fade += (0.005);
        }

        if(counter === numIterations) {
            clearInterval(z);
        }
    }, 20);

    // this.clearScreen();
    // requestAnimationFrame(this.animateWithLoop);
  }

  // clearScreen() {
  //   this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
  //   this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  // }

}




module.exports = Firework;
