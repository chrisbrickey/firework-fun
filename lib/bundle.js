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
// const Firework = require("./firework");
// const Pellet = require("./pellet");


document.addEventListener('DOMContentLoaded', function () {
  console.log("i'm on the entry file");

  var bangImage = new Image();
  bangImage.src = "./images/bang.png";

  var bustImage = new Image();
  bustImage.src = "./images/bust.png";

  var succullentImage = new Image();
  succullentImage.src = "./images/succullent.png";

  var canvasID = "myCanvas";

  var mainCanvas = document.getElementById(canvasID);
  mainCanvas.width = document.documentElement.clientWidth;
  mainCanvas.height = document.documentElement.clientHeight;

  var mainCtx = mainCanvas.getContext("2d");

  var fireworkCanvas = document.getElementById(canvasID);
  var fireworkCtx = mainCanvas.getContext("2d");

  // succullentImage.onload = function() {
  //   mainCtx.drawImage(succullentImage, 100, 100, 20, 20);
  // };

  mainCanvas.addEventListener("click", getClickPosition, false);

  function getClickPosition(event) {
    //figure out a way to clear the canvas before you do this
    // console.log("inside getClickPosition");
    // mainCtx.clearRect(0, 0, Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
    var xPos = event.clientX;
    var yPos = event.clientY;
    console.log(xPos);
    console.log(yPos);
    mainCtx.drawImage(succullentImage, xPos, yPos, 20, 20);
    return xPos, yPos;
  }

  // mainCanvas.addEventListener("click", firework.createFirework, false);

});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map