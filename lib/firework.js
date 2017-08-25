const Pellet = require("./pellet");

class Firework {
  constructor(colorArray, Xcoor, Ycoor, sound) {
    this.Xcoor = Xcoor;
    this.Ycoor = Ycoor;
    this.sound = sound;

    this.pelletArray = [];
    this.colors = colorArray || [[211, 211, 211], [255, 51, 153], [255, 255, 1]];
    this.fireworkInnerRadius = 5;
    this.pelletRadius = 5;

    this.initiate = this.initiate.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoopNew = this.animateWithLoopNew.bind(this);
    this.animateWithLoopCushion = this.animateWithLoopCushion.bind(this);
  }


  initiate() {
    this.sound.play();

    let adjustment = 0;
    this.buildPelletArray(this.Xcoor - adjustment, this.Ycoor + adjustment);
    this.animateWithLoopCushion();
    // this.animateWithLoopCushion();
  }


  buildPelletArray(startX, startY) {

    let load = this.pelletArray.length;
    let numColors = this.colors.length;
    let alpha = 1.0;

    for(let i = 0; i < 300; i++) {
      let p = Math.random();
      let x = startX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
      let y = startY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);
      let colorValues = this.colors[Math.floor(i % numColors)];

      let pellet = new Pellet(x, y, this.pelletRadius, colorValues[0], colorValues[1], colorValues[2], alpha);
      this.pelletArray.push(pellet);
    }

  }


  animateWithLoopNew() {

    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    let fireCanvas = document.getElementById("myCanvas");
    let fireContext = fireCanvas.getContext("2d");
    fireContext.globalCompositeOperation = 'source-over';
    fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

    let x = this;
    let fade = 0;
    let magnitude = 100;
    let gravity = -20;
    let counter = 0;
    let numIterations = 300;


    let z = setInterval(function(){

      if (counter % 2 !== 0) {
        fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
        fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
      }


        for(let i = 0; i < x.pelletArray.length; i++) {

            let pelote = x.pelletArray[i];
            let newAlpha = pelote.alpha - fade;

            let newX = pelote.x;
            let newY = pelote.y;
            let changeX = 0;
            let changeY = 0;

            if (true) {
              let p = Math.random();
              let theta = (2 * Math.PI * p);
              changeX = magnitude * Math.cos(theta) * Math.random();
              changeY = magnitude * Math.sin(theta) * Math.random();

              if (changeY > 100) {
                let modifiedY = changeY * Math.random();
                changeY = modifiedY;
              }
            }

            let q = Math.random();

            if (q < 0.25) {
              newX = newX + changeX;
              newY = newY + changeY + gravity;
            } else if (q < 0.5) {
              newX = newX - changeX;
              newY = newY - changeY + gravity;
            } else if (q < 0.75) {
              newX = newX - changeX;
              newY = newY - changeY;
            } else {
              newX = newX - changeX;
              newY = newY - changeY;
            }

            fireContext.beginPath();
            fireContext.arc(newX, newY, pelote.pelletRadius, 0, 2 * Math.PI, false);
            fireContext.fillStyle = `rgba(${pelote.red}, ${pelote.green}, ${pelote.blue}, ${newAlpha})`;
            fireContext.fill();
          }

        magnitude += 5;
        gravity += 3;
        counter++;
        if (fade < 1){
          fade += (0.02);
        }

        if(counter === numIterations) {
            clearInterval(z);
        }
    }, 20);

  } //end of animateWithLoopNew



  animateWithLoopCushion() {

    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    let fireCanvas = document.getElementById("myCanvas");
    let fireContext = fireCanvas.getContext("2d");
    fireContext.globalCompositeOperation = 'source-over';
    fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

    let x = this;
    let fade = 0;
    let magnitude = 100;
    let gravity = -20;
    let counter = 0;
    let numIterations = 300;


    let z = setInterval(function(){

      if (counter % 2 !== 0) {
        fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
        fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
      }


        for(let i = 0; i < x.pelletArray.length; i++) {

            let pelote = x.pelletArray[i];
            let newAlpha = pelote.alpha - fade;

            let newX = pelote.x;
            let newY = pelote.y;
            let changeX = 0;
            let changeY = 0;

            if (true) {
              let p = Math.random();
              let theta = (2 * Math.PI * p);
              changeX = magnitude * Math.cos(theta) * Math.random();
              changeY = magnitude * Math.sin(theta) * Math.random();

              if (changeY > 100) {
                let modifiedY = changeY * Math.random();
                changeY = modifiedY;
              }
            }

            let q = Math.random();

            if (q < 0.25) {
              newX = newX + changeX;
              newY = newY + changeY + gravity;
            } else if (q < 0.5) {
              newX = newX - changeX;
              newY = newY - changeY + gravity;
            } else if (q < 0.75) {
              newX = newX - changeX;
              newY = newY - changeY;
            } else {
              newX = newX - changeX;
              newY = newY - changeY;
            }

            fireContext.beginPath();
            fireContext.arc(newX, newY, pelote.pelletRadius, 0, 2 * Math.PI, false);
            fireContext.fillStyle = `rgba(${pelote.red}, ${pelote.green}, ${pelote.blue}, ${newAlpha})`;
            fireContext.fill();
          }

        magnitude += 5;
        gravity += 3;
        counter++;
        if (fade < 1){
          fade += (0.02);
        }

        if(counter === numIterations) {
            clearInterval(z);
        }
    }, 20);

  } //end of animateWithLoopCushion

} //end of class


module.exports = Firework;
