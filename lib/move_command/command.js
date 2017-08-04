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
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const panel = new Panel(this.canvas, this.ctx);
    panel.drawPanel();
    const panelHeight = this.canvas.height - 100;

    this.rhythms.map(rhythm => {
      rhythm.drawRhythm();
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
  }

  drawScore(ctx) {
    ctx.font = '30px Orbitron, sans-serif';
    ctx.fillStyle = '#666666';
    ctx.fillText(`Score ⇨ ${this.score}`, 20, 60);
  }

  drawLife(ctx) {
    ctx.font = '30px Orbitron, sans-serif';
    ctx.fillStyle = '#666666';
    ctx.fillText(`Life ⇨ ${this.strike}`, 20, 110);
  }

  drawResult(canvas, ctx, i) {
    ctx.font = '32px Orbitron, sans-serif';
    if (i === 0) {
      ctx.fillStyle = '#DA3743';
    } else if (i === 1) {
      ctx.fillStyle = '#60B2D0';
    }
    ctx.fillText(this.result[i], 20, this.canvas.height - 110);
  }

  drawWL(canvas, ctx, i) {
    ctx.font = '40px Orbitron, sans-serif';
    ctx.fillStyle = '#E5656E';
    ctx.fillText(this.result[i], 180, 200);
  }
}

export default Command;
