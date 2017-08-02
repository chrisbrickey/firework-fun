class Display {
  constructor(ctx, canvasID) {
    this.ctx = ctx;
    this.canvasID = canvasID;
  }

  run() {
    console.log("I'm in the run method of the display!");
  }

  drawWithEasel() {
    let stage = new createjs.Stage(this.canvasID);
    let circle = new createjs.Shape();
    circle.graphics.beginFill("orange").drawCircle(0, 0, 50);
    circle.x = 200;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
  }


  drawWithTween() {
    let stage = new createjs.Stage(this.canvasID);
    let circle = new createjs.Shape();
    circle.graphics.beginFill("green").drawCircle(0, 0, 50);
    circle.x = 400;
    circle.y = 500;
    stage.addChild(circle);
    stage.update();

    createjs.Tween.get(circle, { loop: false })
      .to({ y: 400 }, 2000, createjs.Ease.getPowInOut(10))
      .to({ alpha: 0, x: 175 }, 1000, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, x: 225 }, 200)
      .to({ alpha: 1, x: 200 }, 1000, createjs.Ease.getPowInOut(2))
      .to({ y: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }

}
