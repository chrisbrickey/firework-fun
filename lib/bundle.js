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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pellet = __webpack_require__(4);

var Firework = function () {
  function Firework(colorArray, Xcoor, Ycoor, sound) {
    _classCallCheck(this, Firework);

    this.Xcoor = Xcoor;
    this.Ycoor = Ycoor;
    this.sound = sound;

    this.pelletArray = [];
    this.colors = colorArray || [[211, 211, 211], [255, 51, 153], [255, 255, 1]];
    this.fireworkInnerRadius = 5;
    this.pelletRadius = 3;

    this.initiate = this.initiate.bind(this);
    this.buildPelletArray = this.buildPelletArray.bind(this);
    this.animateWithLoop = this.animateWithLoop.bind(this);
  }

  _createClass(Firework, [{
    key: "initiate",
    value: function initiate() {
      this.sound.play();

      var adjustment = 0;
      this.buildPelletArray(this.Xcoor - adjustment, this.Ycoor + adjustment);
      this.animateWithLoop();
    }
  }, {
    key: "buildPelletArray",
    value: function buildPelletArray(startX, startY) {

      var load = this.pelletArray.length;
      var numColors = this.colors.length;
      var alpha = 1.0;

      for (var i = 0; i < 300; i++) {
        var p = Math.random();
        var x = startX + this.fireworkInnerRadius * Math.cos(2 * Math.PI * p);
        var y = startY + this.fireworkInnerRadius * Math.sin(2 * Math.PI * p);
        var colorValues = this.colors[Math.floor(i % numColors)];

        var pellet = new Pellet(x, y, this.pelletRadius, colorValues[0], colorValues[1], colorValues[2], alpha);
        this.pelletArray.push(pellet);
      }
    }
  }, {
    key: "animateWithLoop",
    value: function animateWithLoop() {

      var viewWidth = document.documentElement.clientWidth;
      var viewHeight = document.documentElement.clientHeight;

      var fireCanvas = document.getElementById("myCanvas");
      var fireContext = fireCanvas.getContext("2d");
      fireContext.globalCompositeOperation = 'source-over';
      fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

      var x = this;
      var fade = 0;
      var magnitude = 100;
      var gravity = -20;
      var counter = 0;
      var numIterations = 300;

      var z = setInterval(function () {

        fireContext.fillStyle = "rgba(0, 0, 0, 0.3)";
        fireContext.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

        for (var i = 0; i < x.pelletArray.length; i++) {

          var pelote = x.pelletArray[i];
          var newAlpha = pelote.alpha - fade;

          var newX = pelote.x;
          var newY = pelote.y;
          var changeX = 0;
          var changeY = 0;

          if (true) {
            var p = Math.random();
            var theta = 2 * Math.PI * p;
            changeX = magnitude * Math.cos(theta) * Math.random();
            changeY = magnitude * Math.sin(theta) * Math.random();

            // if (changeY > 100) {
            //   let modifiedY = changeY * Math.random();
            //   changeY = modifiedY;
            // }
          }

          var q = Math.random();

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
          fireContext.fillStyle = "rgba(" + pelote.red + ", " + pelote.green + ", " + pelote.blue + ", " + newAlpha + ")";
          fireContext.fill();
        }

        magnitude += 5;
        gravity += 3;
        counter++;
        if (fade < 1) {
          fade += 0.02;
        }

        if (counter === numIterations) {
          clearInterval(z);
        }
      }, 20);
    }
  }]);

  return Firework;
}();

module.exports = Firework;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firework = __webpack_require__(0);

var Display = function () {
  function Display(context, playButton) {
    _classCallCheck(this, Display);

    this.context = context;
    this.context.globalCompositeOperation = 'source-over';

    this.playButton = playButton;
    this.fireworkArray = [];

    this.addFirework = this.addFirework.bind(this);
    this.fireThemAll = this.fireThemAll.bind(this);
    this.resetFireworkArray = this.resetFireworkArray.bind(this);
  }

  _createClass(Display, [{
    key: "listenToButton",
    value: function listenToButton() {
      this.playButton.addEventListener("click", this.fireThemAll);
    }
  }, {
    key: "addFirework",
    value: function addFirework(firework) {
      this.fireworkArray.push(firework);
      console.log(this.fireworkArray);
    }
  }, {
    key: "fireThemAll",
    value: function fireThemAll() {
      console.log(this.fireworkArray);

      for (var i = 0; i < this.fireworkArray.length; i++) {
        this.fireworkArray[i].initiate();
      }
    }
  }, {
    key: "resetFireworkArray",
    value: function resetFireworkArray(context) {
      console.log(this.fireworkArray);
      this.fireworkArray = [];
      console.log(this.fireworkArray);
      this.context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    }
  }]);

  return Display;
}();

module.exports = Display;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Demo = __webpack_require__(3);
var Display = __webpack_require__(1);
var Firework = __webpack_require__(0);
var Record = __webpack_require__(7);

document.addEventListener('DOMContentLoaded', function () {

  var mainCanvas = document.getElementById("myCanvas");
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;
  var mainContext = mainCanvas.getContext("2d");
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  var fireworkSound = new Audio("./lib/fireworkSound.mp3");

  var playButton = document.getElementById("play-pause");
  var theDisplay = new Display(mainContext, playButton);
  theDisplay.listenToButton();

  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", theDisplay.resetFireworkArray);

  var demoButton = document.getElementById("demo");
  var demo = new Demo(demoButton);
  demo.listenToButton();

  var button1 = document.getElementById("F1");
  var record1 = new Record(mainCanvas, mainContext, button1, [[255, 102, 1]], theDisplay, fireworkSound);
  record1.listenToButton();

  var button2 = document.getElementById("F2");
  var record2 = new Record(mainCanvas, mainContext, button2, [[255, 255, 1]], theDisplay, fireworkSound);
  record2.listenToButton();

  var button3 = document.getElementById("F3");
  var record3 = new Record(mainCanvas, mainContext, button3, [[1, 255, 1]], theDisplay, fireworkSound);
  record3.listenToButton();

  var button4 = document.getElementById("F4");
  var record4 = new Record(mainCanvas, mainContext, button4, [[1, 102, 255]], theDisplay, fireworkSound);
  record4.listenToButton();

  var button5 = document.getElementById("F5");
  var record5 = new Record(mainCanvas, mainContext, button5, [[255, 51, 153]], theDisplay, fireworkSound);
  record5.listenToButton();

  var button6 = document.getElementById("F6");
  var record6 = new Record(mainCanvas, mainContext, button6, [[211, 211, 211], [255, 51, 153], [255, 255, 1]], theDisplay, fireworkSound);
  record6.listenToButton();

  function updateCanvasContext() {
    mainCanvas.width = document.documentElement.clientWidth;
    mainCanvas.height = document.documentElement.clientHeight;
  }

  window.addEventListener("resize", updateCanvasContext);

  //
  // document.getElementById('mute').addEventListener('click', function (event) {
  //   if ( snd.muted ) {
  //     snd.muted = false
  //     event.target.innerHTML = 'mute'
  //   }
  //   else {
  //     snd.muted = true
  //     event.target.innerHTML = 'unmute'
  //   }
  // })


  // let muteButton = document.getElementById('mute');
  // muteButton.onclick = mutePage();

});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firework = __webpack_require__(0);

var Demo = function () {
  function Demo(button) {
    _classCallCheck(this, Demo);

    this.demoButton = button;
    this.playDemo = this.playDemo.bind(this);
    this.sound = new Audio("./lib/fireworkSound.mp3");
  }

  _createClass(Demo, [{
    key: "listenToButton",
    value: function listenToButton() {
      this.demoButton.addEventListener("click", this.playDemo);
    }
  }, {
    key: "playDemo",
    value: function playDemo() {

      var demoCanvas = document.getElementById("myCanvas");
      demoCanvas.width = document.documentElement.clientWidth;
      demoCanvas.height = document.documentElement.clientHeight;

      var demoContext = demoCanvas.getContext("2d");
      demoContext.globalCompositeOperation = 'source-over';
      demoContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);

      var firework1 = new Firework(null, demoCanvas.width * 0.8, demoCanvas.height * 0.4, this.sound);
      firework1.initiate();

      var firework2 = new Firework([[255, 102, 1]], demoCanvas.width * 0.5, demoCanvas.height * 0.7, this.sound);
      firework2.initiate();

      var firework3 = new Firework(null, demoCanvas.width * 0.7, demoCanvas.height * 0.2, this.sound);
      firework3.initiate();

      var firework4 = new Firework([[1, 255, 1]], demoCanvas.width * 0.4, demoCanvas.height * 0.3, this.sound);
      firework4.initiate();

      var firework5 = new Firework([[255, 102, 1]], demoCanvas.width * 0.3, demoCanvas.height * 0.8, this.sound);
      firework5.initiate();

      var firework6 = new Firework([[255, 102, 1]], demoCanvas.width * 0.6, demoCanvas.height * 0.4, this.sound);
      firework6.initiate();

      var firework7 = new Firework(null, demoCanvas.width * 0.8, demoCanvas.height * 0.8, this.sound);
      firework7.initiate();

      demoContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    }
  }]);

  return Demo;
}();

module.exports = Demo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pellet = function () {
  function Pellet(x, y, radius, red, green, blue, alpha) {
    _classCallCheck(this, Pellet);

    this.x = x || null;
    this.y = y || null;
    this.pelletRadius = radius || null;
    this.red = red || null;
    this.green = green || null;
    this.blue = blue || null;
    this.alpha = alpha || null;

    this.make = this.make.bind(this);
  }

  _createClass(Pellet, [{
    key: 'make',
    value: function make(context) {
      context.globalCompositeOperation = 'source-over';
      context.beginPath();
      context.arc(this.x, this.y, this.pelletRadius, 0, 2 * Math.PI, false);
      context.fillStyle = 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';
      context.fill();
    }
  }]);

  return Pellet;
}();

module.exports = Pellet;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Firework = __webpack_require__(0);
var Display = __webpack_require__(1);

var Record = function () {
  function Record(canvas, context, button, colorArray, display, sound) {
    _classCallCheck(this, Record);

    this.recordCanvas = canvas;
    this.recordCanvas.height = document.documentElement.clientHeight * 0.97;

    this.recordContext = context;
    this.recordContext.globalCompositeOperation = 'source-over';

    this.theButton = button;
    this.display = display;

    this.colorArray = colorArray;
    this.pointColor = "rgb(" + colorArray[0][0] + ", " + colorArray[0][1] + ", " + colorArray[0][2] + ")";

    this.bangImage = new Image();
    this.bangImage.src = "./images/bang.png";
    this.bustImage = new Image();
    this.bustImage.src = "./images/bust.png";

    this.sound = sound;

    this.setCanvasListener = this.setCanvasListener.bind(this);
    this.saveFirework = this.saveFirework.bind(this);
  }

  _createClass(Record, [{
    key: "listenToButton",
    value: function listenToButton() {
      this.theButton.addEventListener("click", this.setCanvasListener);
    }
  }, {
    key: "setCanvasListener",
    value: function setCanvasListener() {
      this.recordCanvas.addEventListener("click", this.saveFirework, false);
    }
  }, {
    key: "saveFirework",
    value: function saveFirework(event) {
      this.recordCanvas.removeEventListener("click", this.saveFirework, false);

      var xPos = event.clientX;
      var yPos = event.clientY;

      if (yPos > 500) {
        yPos = yPos + 20;
      }

      var adjustment = 0;

      this.recordContext.beginPath();
      this.recordContext.arc(xPos - adjustment, yPos + adjustment, 10, 0, 2 * Math.PI, false);
      this.recordContext.fillStyle = this.pointColor;
      this.recordContext.fill();

      this.recordContext.drawImage(this.bustImage, xPos - adjustment - 10, yPos + adjustment - 10, 20, 20);

      var firework = new Firework(this.colorArray, xPos, yPos, this.sound);
      this.display.addFirework(firework);
    }
  }]);

  return Record;
}();

module.exports = Record;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map