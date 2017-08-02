class Demo {
  constructor(ctx, canvasID, demoButton) {
    this.ctx = ctx;
    this.demoButton = demoButton;
    this.playDemo = this.playDemo.bind(this);

  }

  run() {
    console.log("I'm in the run method of demo!");
    this.demoButton.addEventListener("click", this.playDemo);
  }


  playDemo() {
    console.log("inside playDemo");
    // console.log(this);
    // console.log(this.ctx);

    this.ctx.fillStyle = 'transparent';
    this.ctx.fillRect(0, 0, 1000, 700);

    this.ctx.transform(-1, 0, 0, 1, 10, 690);

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, -50, -200);

    this.ctx.beginPath();
    this.ctx.arc(-300, -300, 25, 0*Math.PI, 2*Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(-400, -400, 25, 0*Math.PI, 2*Math.PI);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(-325, -325);
    this.ctx.lineTo(-375, -325);
    this.ctx.lineTo(-350, -375);
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();
    this.ctx.fillStyle = "yellow";
    this.ctx.fill();

  }


}

module.exports = Demo;
