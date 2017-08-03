const Pellet = require("./pellet");


class Firework {
  constructor(canvas) {
  // constructor(ctx, pos, target, vel, color, usePhysics) {
    // this.ctx = ctx;

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

    this.pelletArray = [];
    this.colors = ["orange"];
    this.centerX = this.canvas.width/2;
    this.centerY = this.canvas.height/2;
    this.fireworkInnerRadius = 20;
    this.pelletRadius = 5;


    this.listen = this.listen.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.initiate = this.initiate.bind(this);
    // this.definePellet = this.definePellet.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoop = this.animateWithLoop.bind(this);

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

    this.buildPelletArray();

    //loop through an animation (loop has 3 parts: 1) clears 2) draws 3)requestAnimationFrame)
    this.animateWithLoop();
  }


  buildPelletArray() {

    let load = this.pelletArray.length;
    let numColors = this.colors.length;

    for(let i = 0; i < 200; i++) {
      let p = Math.random();
      let x = this.centerX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
      let y = this.centerY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);

      //creates new pellet
      let pellet = new Pellet(x, y, this.pelletRadius, this.colors[Math.floor(i % numColors)]);
      let reach = this.fireworkInnerRadius + 20 + Math.random() * 80;
      pellet.innerX = x;
      pellet.outerX = this.centerX + reach * Math.cos(2 * Math.PI * p);
      pellet.innerY = y;
      pellet.outerY = this.centerY + reach * Math.sin(2 * Math.PI * p);

      this.pelletArray.push(pellet);
    }

    console.log(this.pelletArray);
  }


  animateWithLoop() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

    for(let i = 0; i < this.pelletArray.length; i++) {
      this.pelletArray[i].make(this.context);
    }

    requestAnimationFrame(this.animateWithLoop);
  }


    //Tween the pelletArray with GSAP TweenLite library
    // for(let i = 0; i < pelletArray.length; i++) {
    //   tweenCircle(pelletArray[i]);
    // }
    //
    // function tweenCircle(c) {
    //   TweenLite.to(c, 0.5+Math.random(), {x: c.outerX, y: c.outerY, ease: Cubic.easeInOut, onComplete: function() {
    //     TweenLite.to(c, 0.5+Math.random(), {x: c.innerX, y: c.innerY, ease: Cubic.easeInOut, onComplete: function() {
    //       tweenCircle(c);
    //     }
    //   })
    //   }});
    // }

  }




module.exports = Firework;
