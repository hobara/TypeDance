import Display from './display';
import Render from './render';
import Animation from './animation';
import Input from './input';

class Dance {
  constructor(canvas) {
    const stageSpriteSheet = new Image();
    stageSpriteSheet.src = "https://res.cloudinary.com/hobara/image/upload/v1501610145/stage_b6dkmp.jpg";

    const dancerSpriteSheet = new Image();
    dancerSpriteSheet.src = "../assets/images/dance_move2.png";

    this.data = {
      animationFrame: 0,
      canvas,
      entityFrame: {
        littleMac: 0,
        glassJoe: 0
      }
    }
    this.bgm = fightTheme;
    this.input = new Input(this.data);

    ringSpriteSheet.addEventListener("load", () => {
      this.data.ringSpriteSheet = ringSpriteSheet
      this.display = new Display(this.data);
      this.render = new Render(this.data);
    });


    window.data = this.data;
  }

  play() {
    this.bgm.play();
    const loop = () => {
      this.handleInput(this.data);
      this.updateAnimation(this.data);
      this.renderUpdate(this.data);

      this.data.animationFrame++;
      this.data.entityFrame.littleMac++;
      this.data.entityFrame.glassJoe++;

      window.requestAnimationFrame(loop);
    }

    loop();
  }

  handleInput(data) {
    this.input.keyUpdate(data);
  }

  updateAnimation(data) {
    Animation.update(data);
  }

  renderUpdate(data) {
    this.render.update(data)
  }


}

export default Game;
