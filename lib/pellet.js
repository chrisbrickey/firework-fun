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
