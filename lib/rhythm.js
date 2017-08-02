import _ from 'lodash';

class Rhythm {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPanel = [53, 135, 217, 261];
    this.yDist = _.range(0, -20000, -50);
  }

  notes() {
    const rhythm = [];
    let length = this.yDist.length;

    for (var i = 0; i < 50; i++) {
      let wx = this.xPanel[Math.floor((Math.random() * 10))];
      let wy = this.yDist[Math.floor((Math.random() * length))];
      rhythm.push(new Notes(this.canvas, this.ctx, wx, wy));
    }
    return rhythm;
  }
}

class Notes {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawNote() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 38, 30);
    this.ctx.fillStyle = '#00BFA5';
    this.ctx.fill();
    this.ctx.closePath();
  }
}

module.exports = Rhythm;
