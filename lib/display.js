import Background from './background';

class Display {
  constructor(data) {
    const background = {
      sprite: new Background(data.stageSpriteSheet, 0, 0, 648, 479),
      x: 0,
      y: 0,
      w: 648,
      h: 479
    };

    const dancer = new (data.dancerSpriteSheet, 320, 300, 72, 161);

    data.background = background;
    data.dancer = dancer;

  }
}



export default Display;
