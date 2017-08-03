import Panel from './panel';
import Rhythm from './rhythm';

class Command {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.result = ['HIT!', 'MISS!', 'YOU WIN!', 'YOU LOSE!', ''];
    this.resultIdx = 4;
    this.gameover = false;
    this.strike = 10;

    this.rhythm = new Rhythm(this.canvas, this.ctx).notes();
    this.pressedA = false;
    this.pressedW = false;
    this.pressedS = false;
    this.pressedE = false;

    // this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const panel = new Panel(this.canvas, this.ctx);
    panel.drawPanel();
    const panelHeight = this.canvas.height - 100;

    this.rhythm.map(note => {
      note.drawNote();
      this.drawScore(this.ctx);
      this.drawLife(this.ctx);
      this.drawResult(this.canvas, this.ctx, this.resultIdx);

      note.y += 5;
      if (note.y > panelHeight) {
        note.y = 3000;
      }

      if (this.gameover === false &&
        ((note.x === 100 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedA === true) ||
        (note.x === 200 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedW === true) ||
        (note.x === 300 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedS === true) ||
        (note.x === 400 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedE === true))) {

        this.score += 1;
        this.resultIdx = 0;
        // this.ctx.fillStyle = 'pink';
        // this.ctx.fillRect(50, this.canvas.height - 300, this.canvas.width - 100, 30);

      } else if ((note.x === 100 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedA === false) ||
        (note.x === 200 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedW === false) ||
        (note.x === 300 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedS === false) ||
        (note.x === 400 && note.y < panelHeight + 5 && note.y > panelHeight - 5 && this.pressedE === false)) {

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
    } else if (this.score >= 30) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.resultIdx = 2;
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    }


    requestAnimationFrame(this.draw.bind(this));
  }

  drawScore(ctx) {
    ctx.font = '24px Orbitron, sans-serif';
    // this.ctx.fillRect(520, 0, 200, 200);
    ctx.fillStyle = '#DA3743';
    ctx.fillText(`Score: ${this.score}`, 20, 30);
  }

  drawLife(ctx) {
    ctx.font = '24px Orbitron, sans-serif';
    // this.ctx.fillRect(500, 0, 200, 100);
    ctx.fillStyle = '#DA3743';
    ctx.fillText(`Life: ${this.strike}`, 20, 60);
  }

  drawResult(canvas, ctx, i) {
    ctx.font = '24px Orbitron, sans-serif';
    // this.ctx.fillRect(500, 0, 200, 100);
    ctx.fillStyle = '#DA3743';
    ctx.fillText(this.result[i], 20, 90);
  }

  drawWL(canvas, ctx, i) {
    ctx.font = '36px Orbitron, sans-serif';
    ctx.fillStyle = '#DA3743';
    // this.ctx.fillRect(200, 200, 200, 200);
    ctx.fillText(this.result[i], 200, 200);
    // this.drawResult(canvas, ctx, i);
  }


}

export default Command;
