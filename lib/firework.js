const Pellet = require("./pellet");
// const Matter = require("./matter");


class Firework {
  constructor(canvas, colorArray) {

    this.canvas = canvas;
    this.context = canvas.getContext("2d");


    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.pelletArray = [];
    this.colors = colorArray || [[255, 1, 1], [1, 255, 1], [1, 1, 255]];
    // this.colors = [[255, 1, 1], [1, 255, 1], [1, 1, 255]];
    this.centerX = this.canvas.width/2;
    this.centerY = this.canvas.height/2;
    this.fireworkInnerRadius = 5;
    this.pelletRadius = 3;

    this.initiate = this.initiate.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoop = this.animateWithLoop.bind(this);
    this.clearScreen = this.clearScreen.bind(this);

  }

  initiate(xCoor, yCoor) {
    let fireworkSound = new Audio("./lib/fireworkSound.mp3");
    fireworkSound.play();

    // this.clearScreen();
    // this.context.drawImage(this.bangImage, (xCoor - 20), (yCoor + 20), 20, 20);
    // this.clearScreen();

    this.buildPelletArray(xCoor - 20, yCoor + 20);

    //loop through an animation (loop has 3 parts: 1) clears 2) draws 3)requestAnimationFrame)
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
      // pellet.make(this.context);
      this.pelletArray.push(pellet);
    }
    // console.log(this.pelletArray);
  }


  animateWithLoop() {
    console.log("inside animate with Loop");

    let x = this;
    let fade = 0;
    let counter = 0;
    let numIterations = 300;
    let z = setInterval(function(){

        x.clearScreen();

        for(let i = 0; i < x.pelletArray.length; i++) {
          let pelote = x.pelletArray[i];
          let newAlpha = pelote.alpha - fade;
          let negPos = [-1, 1][Math.floor(Math.random()) * 2];
          // console.log(newAlpha);

          x.context.beginPath();
          x.context.arc((pelote.x + (counter * 3 * [-1, 1][Math.floor(Math.random()) * 2] * Math.random())), (pelote.y + (counter * 2 * [-1, 1][Math.floor(Math.random()) * 2] * Math.random())), pelote.pelletRadius, 0, 2 * Math.PI, false);
          x.context.fillStyle = `rgba(${pelote.red}, ${pelote.green}, ${pelote.blue}, ${newAlpha})`;
          x.context.fill();

        }

        counter++;
        if (fade < 1){
          fade += (0.005);
        }

        if(counter === numIterations) {
            clearInterval(z);
        }
    }, 10);

    // this.clearScreen();
    // requestAnimationFrame(this.animateWithLoop);
  }

  clearScreen() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
  }

}




module.exports = Firework;
