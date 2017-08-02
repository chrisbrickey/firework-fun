const Pellet = function (ctx, pos, target, vel, color, usePhysics) {
    this.ctx = ctx;

    this.pos = {
      x: pos.x || 0,
      y: pos.y || 0
    };

    this.target = {
      x: this.target.x || 0,
      y: this.target.y || 0
    };

    this.vel = {
      x: this.vel.x || 0,
      y: this.vel.y || 0
    };

    this.color = color;

    this.usePhysics = usePhysics || false;

    this.clearScreen = this.clearScreen.bind(this);
};

  // to get full height/width:
  // document.documentElement.clientWidth
  // document.documentElement.clientHeight
  // ...these are built into window

  Pellet.prototype.clearScreen = function () {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.fillRect(0, 0, 1000, 700);
  };

module.exports = Pellet;
