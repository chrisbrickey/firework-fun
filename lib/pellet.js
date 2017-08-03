class Pellet {
  constructor (x, y, radius, color) {

    this.x = x || null;
    this.y = y || null;
    this.pelletRadius = radius || null;
    this.color = color || null;

    this.make = this.make.bind(this);

  }

  make(context) {
    // if (!this.x || !this.y || !this.pelletRadius || !this.color) {
    //     console.error('pellet parameter error');
    //     return;
    // }

    context.beginPath();
    context.arc(this.x, this.y, this.pelletRadius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    // console.log("inside make", this.x);
    // let stage = new createjs.Stage("myCanvas");
    // let pelote = new createjs.Shape();
    // pelote.graphics.beginFill(this.color).drawCircle(0, 0, this.pelletRadius);
    // pelote.x = this.x;
    // pelote.y = this.y;
    // stage.addChild(pelote);
    // stage.update();

    // createjs.Tween.get(pelote, { loop: false })
    //   .to({ y: 400 }, 2000, createjs.Ease.getPowInOut(10))
    //   .to({ alpha: 0, x: 175 }, 1000, createjs.Ease.getPowInOut(2))
    //   .to({ alpha: 0, x: 225 }, 200)
    //   .to({ alpha: 1, x: 200 }, 1000, createjs.Ease.getPowInOut(2))
    //   .to({ y: 100 }, 800, createjs.Ease.getPowInOut(2));
    //
    // createjs.Ticker.setFPS(60);
    // createjs.Ticker.addEventListener("tick", stage);
  }


}



// class Pellet {
//
//   constructor (ctx, posObject, targetObject, velObject, color, usePhysics) {
//     // this.ctx = ctx;
//     this.color = color;
//
//     this.gravity = 0.05;
//     this.alpha = 1;
//     this.easing = Math.random() * 0.05;
//     this.fade = Math.random() * 0.2;
//
//
//     this.pos = {
//       x: posObject.x || 0,
//       y: posObject.y || 0
//     };
//
//     this.target = {
//       x: this.targetObject.x || 0,
//       y: this.targetObject.y || 0
//     };
//
//     this.velocity = {
//       x: this.velObject.x || 0,
//       y: this.velObject.y || 0
//     };
//
//     this.usePhysics = usePhysics || false;
//
//     this.clearScreen = this.clearScreen.bind(this);
//   }
//
//   // to get full height/width:
//   // document.documentElement.clientWidth
//   // document.documentElement.clientHeight
//   // ...these are built into window
//
//   clearScreen() {
//     this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
//     this.ctx.fillRect(0, 0, 1000, 700);
//   }
//
// }

module.exports = Pellet;
