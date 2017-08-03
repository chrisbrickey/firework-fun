/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const requestAnimFrame = require("./requestAnimFrame");
// const Demo = require("./demo");
// const Display = require("./display");
var Firework = __webpack_require__(1);
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', function () {

  //credit for requestAnimFrame: Paul Irish
  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  console.log("i'm on the entry file");

  var canvasID = "myCanvas";

  var mainCanvas = document.getElementById(canvasID);
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  var firework = new Firework(mainCanvas);
  firework.listen();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pellet = __webpack_require__(2);

var Firework = function () {
  function Firework(canvas) {
    _classCallCheck(this, Firework);

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
    this.colors = ["orange", "red", "white"];
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.fireworkInnerRadius = 100;
    this.pelletRadius = 5;

    this.listen = this.listen.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.initiate = this.initiate.bind(this);
    // this.definePellet = this.definePellet.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoop = this.animateWithLoop.bind(this);
  }

  _createClass(Firework, [{
    key: "listen",
    value: function listen() {
      console.log("I'm in the listen method of firework!");
      this.canvas.addEventListener("click", this.getClickPosition, false);
    }
  }, {
    key: "getClickPosition",
    value: function getClickPosition(event) {
      //this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
      //this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight)
      var xPos = event.clientX;
      var yPos = event.clientY;
      this.initiate(xPos, yPos);
      // console.log(xPos);
      // console.log(yPos);
      //this.context.drawImage(this.bangImage, (xPos - 20), (yPos + 20), 20, 20);
      return { x: xPos, y: yPos };
    }
  }, {
    key: "initiate",
    value: function initiate(xCoor, yCoor) {
      this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
      this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

      // window.requestAnimFrame(this.initiate);

      this.context.drawImage(this.bangImage, xCoor - 20, yCoor + 20, 20, 20);

      this.buildPelletArray();

      //loop through an animation (loop has 3 parts: 1) clears 2) draws 3)requestAnimationFrame)
      this.animateWithLoop();
    }
  }, {
    key: "buildPelletArray",
    value: function buildPelletArray() {

      var load = this.pelletArray.length;
      var numColors = this.colors.length;

      for (var i = 0; i < 200; i++) {
        var p = Math.random();
        var x = this.centerX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
        var y = this.centerY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);

        //creates new pellet
        var pellet = new Pellet(x, y, this.pelletRadius, this.colors[Math.floor(i % numColors)]);
        // let reach = this.fireworkInnerRadius + 20 + Math.random() * 80;
        // pellet.innerX = x;
        // pellet.outerX = this.centerX + reach * Math.cos(2 * Math.PI * p);
        // pellet.innerY = y;
        // pellet.outerY = this.centerY + reach * Math.sin(2 * Math.PI * p);

        this.pelletArray.push(pellet);
      }

      // console.log(this.pelletArray);
    }
  }, {
    key: "animateWithLoop",
    value: function animateWithLoop() {
      this.context.fillStyle = "rgba(0, 0, 0, 0.3)";
      this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

      for (var i = 0; i < this.pelletArray.length; i++) {
        // this.pelletArray[i].make(this.context);

        var pelote = this.pelletArray[i];
        this.context.beginPath();
        this.context.arc(pelote.x, pelote.y, pelote.pelletRadius, 0, 2 * Math.PI, false);
        this.context.fillStyle = pelote.color;
        this.context.fill();
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

  }]);

  return Firework;
}();

module.exports = Firework;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pellet = function () {
  function Pellet(x, y, radius, color) {
    _classCallCheck(this, Pellet);

    this.x = x || null;
    this.y = y || null;
    this.pelletRadius = radius || null;
    this.color = color || null;

    this.make = this.make.bind(this);
  }

  _createClass(Pellet, [{
    key: "make",
    value: function make(context) {
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
  }]);

  return Pellet;
}();

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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map