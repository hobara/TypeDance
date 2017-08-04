import Panel from './panel';
import Rhythms from './rhythm';

class Command {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.result = ['HIT!', 'MISS!', 'YOU WIN!', 'YOU LOSE!', ''];
    this.resultIdx = 4;
    this.gameover = false;
    this.strike = 10;

    this.rhythms = new Rhythms(this.canvas, this.ctx).notes();
    this.pressedA = false;
    this.pressedS = false;
    this.pressedD = false;
    this.pressedF = false;

    // this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const panel = new Panel(this.canvas, this.ctx);
    panel.drawPanel();
    const panelHeight = this.canvas.height - 100;

    this.rhythms.map(rhythm => {
      rhythm.drawNote();
      this.drawScore(this.ctx);
      this.drawLife(this.ctx);
      this.drawResult(this.canvas, this.ctx, this.resultIdx);

      rhythm.y += 3.5;
      if (rhythm.y > panelHeight) {
        rhythm.y = 3000;
      }

      if (this.gameover === false &&
        ((rhythm.x === 100 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedA === true) ||
        (rhythm.x === 200 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedS === true) ||
        (rhythm.x === 300 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedD === true) ||
        (rhythm.x === 400 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedF === true))) {

        this.score += 1;
        this.resultIdx = 0;
        // this.ctx.fillStyle = 'pink';
        // this.ctx.fillRect(50, this.canvas.height - 300, this.canvas.width - 100, 30);

      } else if (this.gameover === false && ((rhythm.x === 100 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedA === false) ||
        (rhythm.x === 200 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedS === false) ||
        (rhythm.x === 300 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedD === false) ||
        (rhythm.x === 400 && rhythm.y < panelHeight + 5 && rhythm.y > panelHeight - 5 && this.pressedF === false))) {

        this.resultIdx = 1;
        this.strike -= 1;
      }
    });

    if (this.strike <= 0) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.resultIdx = 3;
      this.strike = 0;
      // this.drawLife(this.ctx);
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    } else if (this.score >= 100) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.resultIdx = 2;
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    }

    // requestAnimationFrame(this.draw.bind(this));
  }

  drawScore(ctx) {
    ctx.font = '32px Orbitron, sans-serif';
    // this.ctx.fillRect(520, 0, 200, 200);
    ctx.fillStyle = '#E5656E';
    ctx.fillText(`Score: ${this.score}`, 20, 50);
  }

  drawLife(ctx) {
    ctx.font = '32px Orbitron, sans-serif';
    // this.ctx.fillRect(500, 0, 200, 100);
    ctx.fillStyle = '#E5656E';
    ctx.fillText(`Life: ${this.strike}`, 20, 90);
  }

  drawResult(canvas, ctx, i) {
    ctx.font = '32px Orbitron, sans-serif';
    // this.ctx.fillRect(500, 0, 200, 100);
    ctx.fillStyle = '#E5656E';
    ctx.fillText(this.result[i], 20, 130);
  }

  drawWL(canvas, ctx, i) {
    ctx.font = '36px Orbitron, sans-serif';
    ctx.fillStyle = '#E5656E';
    // this.ctx.fillRect(200, 200, 200, 200);
    ctx.fillText(this.result[i], 200, 200);
    // this.drawResult(canvas, ctx, i);
  }

}

export default Command;
