const Firework = require("./firework");

class Record {
  constructor (canvas, button) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.theButton = button;

    this.saveRecord = this.saveRecord.bind(this);
    this.playRecord = this.playRecord.bind(this);
  }

  listen() {
    console.log("in the listen method of record");
    this.theButton.addEventListener("click", this.saveRecord);
  }

  saveRecord() {
    let firework = new Firework(this.canvas);
    firework.listen();

  }

  playRecord() {

  }



}

module.exports = Record;
