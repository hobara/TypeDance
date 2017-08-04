import _ from 'lodash';

class Rhythms {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPanel = [100, 200, 300, 400];
    this.yDist = _.range(0, -20000, -150);
  }

  notes() {
    const rhythms = [];
    let length = this.yDist.length;
    for (var i = 0; i < 100; i++) {
      let wx = this.xPanel[Math.floor((Math.random() * 5))];
      let wy = this.yDist[Math.floor((Math.random() * length))];
      rhythms.push(new Rhythm(this.canvas, this.ctx, wx, wy));
    }
    return rhythms;
  }
}

class Rhythm {
  constructor(canvas, ctx, x, y) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  drawRhythm() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, 100, 100);
    if (this.x === 100) {
      this.ctx.drawImage(rhythmLeft, this.x, this.y);
    } else if (this.x === 200) {
      this.ctx.drawImage(rhythmUp, this.x, this.y);
    } else if (this.x === 300) {
      this.ctx.drawImage(rhythmDown, this.x, this.y);
    } else if (this.x === 400) {
      this.ctx.drawImage(rhythmRight, this.x, this.y);
    }
    this.ctx.save();
    this.ctx.closePath();
  }
}

const rhythmLeft = new Image();
rhythmLeft.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739095/imageedit_12_9748278886_cfs7dl.png';
const rhythmUp = new Image();
rhythmUp.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739098/imageedit_10_5392912745_jnywwj.png';
const rhythmDown = new Image();
rhythmDown.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739100/imageedit_8_5996735338_dmj6k0.png';
const rhythmRight = new Image();
rhythmRight.src = 'https://res.cloudinary.com/hobara/image/upload/v1501739101/imageedit_6_2959963072_grv0la.png';

export default Rhythms;
