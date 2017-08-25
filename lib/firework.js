const Pellet = require("./pellet");

class Firework {
  constructor(colorArray, Xcoor, Ycoor, sound) {
    this.Xcoor = Xcoor;
    this.Ycoor = Ycoor;
    this.sound = sound;

    this.pelletArray = [];
    this.colors = colorArray || [[211, 211, 211], [255, 51, 153], [255, 255, 1]];
    // this.fireworkInnerRadius = 5;
    // this.pelletRadius = 5;

    this.initiate = this.initiate.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoopNew = this.animateWithLoopNew.bind(this);
    this.animateWithLoopCushion = this.animateWithLoopCushion.bind(this);
  }


  initiate() {
    // this.sound.play();

    let adjustment = 0;
    this.buildPelletArray(this.Xcoor - adjustment, this.Ycoor + adjustment);
    this.animateWithLoopNew();
    // this.animateWithLoopCushion();
  }


  buildPelletArray(startX, startY) {

    let fireworkInnerRadius = 0;
    let pelletRadius = 5;
    let numColors = this.colors.length;
    let alpha = 1.0;

    for(let i = 0; i < 50; i++) {

      //this block randomizes the location of pellets along a ring (radius = fireworkInnerRadius)
      let p = Math.random(); //Random number 0 -> 1
      //Math.cos(whatever) = number between -1 and + 1.  It is x-value as the hypotenuse winds around the unit circle
      //meaningful input to Math.cos is (0..2 * PI)  that is all the angles of one unit circle
      let x = startX + fireworkInnerRadius * Math.cos(2 * Math.PI * p);
      let y = startY + fireworkInnerRadius * Math.sin(2 * Math.PI * p);

      //assigns color to the pellet (evenly distributed b/c using modulo on subsequent integers)
      let colorValues = this.colors[Math.floor(i % numColors)];

      let pellet = new Pellet(x, y, pelletRadius, colorValues[0], colorValues[1], colorValues[2], alpha);
      this.pelletArray.push(pellet);
    }

  }


  animateWithLoopNew() {
    let x = this;
    let kCounter = 0;

    let k = setInterval(function(){

      x.sound.play();
      kCounter++;

      if(kCounter === x.pelletArray.length) {
          clearInterval(k);
      }

    }, 10);

    let viewWidth = document.documentElement.clientWidth;
    let viewHeight = document.documentElement.clientHeight;

    //how can I set the canvas to be the size of the pellet instead of entire screen?
    let fireCanvas = document.getElementById("myCanvas");
    let fireContext = fireCanvas.getContext("2d");
    fireContext.globalCompositeOperation = 'source-over';
    fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);


    //inputs to loop

    let fade = 0;
    let magnitude = 1; //this appears to only be used on the first iteration
    let gravity = -1;
    let counter = 0;
    let numIterations = 300;

    //the loop
    let z = setInterval(function(){

      // if ((counter > 50) && (counter % 10 === 0)) {
      //   fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
      //   fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
      // }


        for(let i = 0; i < x.pelletArray.length; i++) {

            let pelote = x.pelletArray[i];
            let newAlpha = pelote.alpha - fade;

            let newX = pelote.x;
            let newY = pelote.y;
            let changeX = 0;
            let changeY = 0;
            let divisor = 20;

            let angleGroup = (i % divisor); //divides pellets into groups - pellets remain in the same group through all intervals b/c based on i

            if (true) {
              //assigns theta based on group; if 6 groups... at 0rad, pi/3 rad, 2pi/3 rad, pi rad, 4 pi/3 rad, 5 pi/3 rad, 2 pi rad
              let theta = (angleGroup * 2 * Math.PI / divisor);

              changeX = magnitude * Math.cos(theta);
              changeY = magnitude * Math.sin(theta);

              if (theta === 0 || theta === Math.PI) {
                changeY += 15;
              }

              if (theta === (Math.PI / 2) || theta === (3 * Math.PI / 2)) {
                changeY += 15;
              }

              // if (changeX > 25) {
              //   let modifiedX = changeX * Math.random();
              //   changeX = modifiedX;
              // }
              //
              // if (changeY > 25) {
              //   let modifiedY = changeY * Math.random();
              //   changeY = modifiedY;
              // }
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
        gravity += 2;
        counter++;
        if (fade < 1){
          fade += (0.02);
        }

        if(counter === (numIterations * 0.19)) {
          fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
          fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
        }

        if(counter === numIterations) {
            // fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
            // fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);
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
