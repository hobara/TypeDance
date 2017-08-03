import _ from 'lodash';

class Rhythm {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPanel = [100, 200, 300, 400];
    this.yDist = _.range(0, -20000, -150);
  }

  notes() {
    const rhythm = [];
    let length = this.yDist.length;
    for (var i = 0; i < 50; i++) {
      let wx = this.xPanel[Math.floor((Math.random() * 5))];
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
    this.ctx.rect(this.x, this.y, 100, 100);
    const imageObj = new Image();
    if (this.x === 100) {
      imageObj.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739095/imageedit_12_9748278886_cfs7dl.png';
      this.ctx.drawImage(imageObj, this.x, this.y);
    } else if (this.x === 200) {
      imageObj.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739098/imageedit_10_5392912745_jnywwj.png';
      this.ctx.drawImage(imageObj, this.x, this.y);
    } else if (this.x === 300) {
      imageObj.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_100,w_100/v1501739100/imageedit_8_5996735338_dmj6k0.png';
      this.ctx.drawImage(imageObj, this.x, this.y);
    } else if (this.x === 400) {
      imageObj.src = 'https://res.cloudinary.com/hobara/image/upload/v1501739101/imageedit_6_2959963072_grv0la.png';
      this.ctx.drawImage(imageObj, this.x, this.y);
    }
    this.ctx.save();
    this.ctx.closePath();
  }
}

export default Rhythm;
