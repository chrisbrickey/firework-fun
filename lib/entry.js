// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
const Firework = require("./firework");
// const Pellet = require("./pellet");
const Matter = require("./matter");


document.addEventListener('DOMContentLoaded', () => {


  //credit for requestAnimFrame: Paul Irish
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();


  console.log("i'm on the entry file");

  const canvasID = "myCanvas";

  const mainCanvas = document.getElementById(canvasID);
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  let firework = new Firework(mainCanvas);
  firework.listen();


  // module aliases
  // let Engine = Matter.Engine;
  // let Render = Matter.Render;
  // let World = Matter.World;
  // let Bodies = Matter.Bodies;
  //
  //   // create an engine
  //   let engine = Engine.create();
  //
  //   // create a renderer
  //   let render = Render.create({
  //       element: document.body,
  //       engine: engine
  //   });
  //
  //   // create two boxes and a ground
  //   let boxA = Bodies.rectangle(400, 200, 80, 80);
  //   let boxB = Bodies.rectangle(450, 50, 80, 80);
  //   let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  //
  //   // add all of the bodies to the world
  //   World.add(engine.world, [boxA, boxB, ground]);
  //
  //   // run the engine
  //   Engine.run(engine);
  //
  //   // run the renderer
  //   Render.run(render);

});
