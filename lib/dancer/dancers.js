
const SpriteSheet = require('./sprite_sheet');
// const dancer = document.getElementById('dance-board-canvas');
// const context = dancer.getContext('2d');

const dance_texture = new Image();
dance_texture.src =
'https://res.cloudinary.com/hobara/image/upload/c_scale,h_200/v1501745192/move2_b6wcs3.png';
// "https://res.cloudinary.com/hobara/image/upload/v1501608500/imageedit_4_5539414729_ca4fwg.png";
// '../assets/images/dance_move2.png';

const dance_textureA = new Image();
dance_textureA.src =
'https://res.cloudinary.com/hobara/image/upload/c_scale,h_200/v1501816508/move1_xxx2fw.png';

const dance_textureS = new Image();
dance_textureS.src =
'https://res.cloudinary.com/hobara/image/upload/c_scale,h_200/v1501784205/move2_rttiog.png';

const dance_textureD = new Image();
dance_textureD.src =
'https://res.cloudinary.com/hobara/image/upload/c_scale,h_200/v1501815649/move2_mz58vt.png';

const dance_textureF = new Image();
dance_textureF.src =
'https://res.cloudinary.com/hobara/image/upload/c_scale,h_200/v1501783531/move1_u8moio.png';




const dance_spritesheet = SpriteSheet.new(dance_texture, {
  frames: [20, 20], //Each frame defined by the amount of time it will be rendered before moving on
  x: 140,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true,
});
const dance_spritesheet2 = SpriteSheet.new(dance_texture, {
  frames: [20, 20], //Each frame defined by the amount of time it will be rendered before moving on
  x: 250,
  y: 270,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true,
});
const dance_spritesheet3 = SpriteSheet.new(dance_texture, {
  frames: [20, 20], //Each frame defined by the amount of time it will be rendered before moving on
  x: 360,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true,
});

const dance_spritesheetA = SpriteSheet.new(dance_textureA, {
  frames: [1000],
  x: 140,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetA2 = SpriteSheet.new(dance_textureA, {
  frames: [1000],
  x: 250,
  y: 270,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetA3 = SpriteSheet.new(dance_textureA, {
  frames: [1000],
  x: 360,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});

const dance_spritesheetS = SpriteSheet.new(dance_textureS, {
  frames: [1000],
  x: 140,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetS2 = SpriteSheet.new(dance_textureS, {
  frames: [1000],
  x: 250,
  y: 270,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetS3 = SpriteSheet.new(dance_textureS, {
  frames: [1000],
  x: 360,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});

const dance_spritesheetD = SpriteSheet.new(dance_textureD, {
  frames: [1000],
  x: 140,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetD2 = SpriteSheet.new(dance_textureD, {
  frames: [1000],
  x: 250,
  y: 270,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetD3 = SpriteSheet.new(dance_textureD, {
  frames: [1000],
  x: 360,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});

const dance_spritesheetF = SpriteSheet.new(dance_textureF, {
  frames: [1000],
  x: 140,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetF2 = SpriteSheet.new(dance_textureF, {
  frames: [1000],
  x: 250,
  y: 270,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});
const dance_spritesheetF3 = SpriteSheet.new(dance_textureF, {
  frames: [1000],
  x: 360,
  y: 250,
  width: 110,
  height: 280,
  restart: true,
  autoPlay: true
});


class Dance {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.pressedA = false;
    this.pressedS = false;
    this.pressedD = false;
    this.pressedF = false;
  }


  draw() {
    this.ctx.clearRect(140,270,110,220);
    this.ctx.clearRect(250,290,110,220);
    this.ctx.clearRect(360,270,110,220);

    dance_spritesheet.tick();
    dance_spritesheet2.tick();
    dance_spritesheet3.tick();
    this.ctx.height = '100%';
    this.ctx.fillStyle = "transparent";

    this.ctx.fillRect(140,260,110,220);
    this.ctx.fillRect(250,260,110,220);
    this.ctx.fillRect(360,260,110,220);

    this.ctx.save();
    this.ctx.translate(0, 30);

    dance_spritesheet.draw(this.ctx);
    dance_spritesheet2.draw(this.ctx);
    dance_spritesheet3.draw(this.ctx);

    this.ctx.restore();
  }

  moveA() {
    this.ctx.clearRect(140,270,110,220);
    this.ctx.clearRect(250,290,110,220);
    this.ctx.clearRect(360,270,110,220);
    dance_spritesheetA.tick();
    this.ctx.height = '100%';
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(140,260,110,220);
    this.ctx.fillRect(250,260,110,220);
    this.ctx.fillRect(360,260,110,220);

    this.ctx.save();
    this.ctx.translate(0, 30);

    dance_spritesheetA.delayDraw(this.ctx);
    dance_spritesheetA2.delayDraw(this.ctx);
    dance_spritesheetA3.delayDraw(this.ctx);
    this.ctx.restore();

  }

  moveS() {
    this.ctx.clearRect(140,270,110,220);
    this.ctx.clearRect(250,290,110,220);
    this.ctx.clearRect(360,270,110,220);
    dance_spritesheetS.tick();
    this.ctx.height = '100%';
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(140,260,110,220);
    this.ctx.fillRect(250,260,110,220);
    this.ctx.fillRect(360,260,110,220);

    this.ctx.save();
    this.ctx.translate(0, 30);

    dance_spritesheetS.delayDraw(this.ctx);
    dance_spritesheetS2.delayDraw(this.ctx);
    dance_spritesheetS3.delayDraw(this.ctx);
    this.ctx.restore();
  }

  moveD() {
    this.ctx.clearRect(140,270,110,220);
    this.ctx.clearRect(250,290,110,220);
    this.ctx.clearRect(360,270,110,220);
    dance_spritesheetD.tick();
    this.ctx.height = '100%';
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(140,260,110,220);
    this.ctx.fillRect(250,260,110,220);
    this.ctx.fillRect(360,260,110,220);

    this.ctx.save();
    this.ctx.translate(0, 30);

    dance_spritesheetD.delayDraw(this.ctx);
    dance_spritesheetD2.delayDraw(this.ctx);
    dance_spritesheetD3.delayDraw(this.ctx);
    this.ctx.restore();
  }

  moveF() {
    this.ctx.clearRect(140,270,110,220);
    this.ctx.clearRect(250,290,110,220);
    this.ctx.clearRect(360,270,110,220);
    dance_spritesheetF.tick();
    this.ctx.height = '100%';
    this.ctx.fillStyle = "transparent";
    this.ctx.fillRect(140,260,110,220);
    this.ctx.fillRect(250,260,110,220);
    this.ctx.fillRect(360,260,110,220);

    this.ctx.save();
    this.ctx.translate(0, 30);

    dance_spritesheetF.delayDraw(this.ctx);
    dance_spritesheetF2.delayDraw(this.ctx);
    dance_spritesheetF3.delayDraw(this.ctx);
    this.ctx.restore();
  }

  idle() {

  }

}




export default Dance;
