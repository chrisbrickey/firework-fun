class Pellet {
  constructor (x, y, radius, red, green, blue, alpha) {

    this.x = x || null;
    this.y = y || null;
    this.pelletRadius = radius || null;
    this.red = red || null;
    this.green = green || null;
    this.blue = blue || null;
    this.alpha = alpha || null;

    this.make = this.make.bind(this);

  }

  make(context) {
    context.globalCompositeOperation = 'source-over';
    context.beginPath();
    context.arc(this.x, this.y, this.pelletRadius, 0, 2 * Math.PI, false);
    context.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    context.fill();
  }


}

module.exports = Pellet;
