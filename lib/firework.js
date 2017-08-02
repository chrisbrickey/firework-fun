const Pellet = require("./pellet");


class Firework {
  constructor(canvas) {
  // constructor(ctx, pos, target, vel, color, usePhysics) {
    // this.ctx = ctx;

    this.pelletArray = [];

    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    // this.mainCanvas = null;
    // this.mainContext = null;
    // this.fireworkCanvas = null;
    // this.fireworkContext = null;
    // this.screenWidth = 0;
    // this.screenHeight = 0;

    this.listen = this.listen.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.initiate = this.initiate.bind(this);
  }

  listen() {
    console.log("I'm in the listen method of firework!");
    this.canvas.addEventListener("click", this.getClickPosition, false);
  }

  getClickPosition(event) {
    //this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    //this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)
    let xPos = event.clientX;
    let yPos = event.clientY;
    this.initiate(xPos, yPos);
    // console.log(xPos);
    // console.log(yPos);
    //this.context.drawImage(this.bangImage, (xPos - 20), (yPos + 20), 20, 20);
    return {x: xPos, y: yPos};
  }

  initiate(xCoor, yCoor) {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)

    // window.requestAnimFrame(this.initiate);

    this.context.drawImage(this.bangImage, (xCoor - 20), (yCoor + 20), 20, 20);


  }

  explode() {
    let numParticles = this.pelletArray.length;

    while (numParticles --) {
      let burst = this.pelletArray[numParticles];

    }
  }



}



module.exports = Firework;
