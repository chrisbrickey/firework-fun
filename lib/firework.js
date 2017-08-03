const Pellet = require("./pellet");
// const Matter = require("./matter");


class Firework {
  constructor(canvas) {

    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.pelletArray = [];
    this.colors = ["orange", "red", "white"];
    this.centerX = this.canvas.width/2;
    this.centerY = this.canvas.height/2;
    this.fireworkInnerRadius = 10;
    this.pelletRadius = 2;

    this.listen = this.listen.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.initiate = this.initiate.bind(this);
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
    this.context.drawImage(this.bangImage, (xCoor - 20), (yCoor + 20), 20, 20);

    this.buildPelletArray(xCoor - 20, yCoor + 20);
    //loop through an animation (loop has 3 parts: 1) clears 2) draws 3)requestAnimationFrame)
    this.animateWithLoop();

  }


  buildPelletArray(startX, startY) {

    let load = this.pelletArray.length;
    let numColors = this.colors.length;

    for(let i = 0; i < 200; i++) {
      let p = Math.random();
      let x = startX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
      let y = startY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);
      let pellet = new Pellet(x, y, this.pelletRadius, this.colors[Math.floor(i % numColors)]);
      this.pelletArray.push(pellet);
    }

  }


  animateWithLoop() {
    let x = this;
    let counter = 0;
    let z = setInterval(function(){

        x.context.fillStyle = "rgba(0, 0, 0, 0.3)";
        x.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

        for(let i = 0; i < x.pelletArray.length; i++) {
          let pelote = x.pelletArray[i];
          x.context.beginPath();
          x.context.arc((pelote.x + counter), pelote.y, pelote.pelletRadius, 0, 2 * Math.PI, false);
          x.context.fillStyle = pelote.color;
          x.context.fill();

        }

        counter++;
        if(counter === 50) {
            clearInterval(z);
        }
    }, 10);

    // requestAnimationFrame(this.animateWithLoop);
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
