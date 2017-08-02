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

    this.pelletArray = [];

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

    this.listen = this.listen.bind(this);
    this.getClickPosition = this.getClickPosition.bind(this);
    this.initiate = this.initiate.bind(this);
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
    }
  }, {
    key: "explode",
    value: function explode() {
      var numParticles = this.pelletArray.length;

      while (numParticles--) {
        var burst = this.pelletArray[numParticles];
      }
    }
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
  function Pellet(ctx, posObject, targetObject, velObject, color, usePhysics) {
    _classCallCheck(this, Pellet);

    // this.ctx = ctx;
    this.color = color;

    this.gravity = 0.05;
    this.alpha = 1;
    this.easing = Math.random() * 0.05;
    this.fade = Math.random() * 0.2;

    this.pos = {
      x: posObject.x || 0,
      y: posObject.y || 0
    };

    this.target = {
      x: this.targetObject.x || 0,
      y: this.targetObject.y || 0
    };

    this.velocity = {
      x: this.velObject.x || 0,
      y: this.velObject.y || 0
    };

    this.usePhysics = usePhysics || false;

    this.clearScreen = this.clearScreen.bind(this);
  }

  // to get full height/width:
  // document.documentElement.clientWidth
  // document.documentElement.clientHeight
  // ...these are built into window

  _createClass(Pellet, [{
    key: "clearScreen",
    value: function clearScreen() {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      this.ctx.fillRect(0, 0, 1000, 700);
    }
  }]);

  return Pellet;
}();

module.exports = Pellet;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map