const Moves = require('./moves');
const Rhythm = require('./rhythm');

class Command {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.result = ['HIT!', 'MISS!', 'YOU WIN!', 'YOU LOSE!', ''];
    this.resultIdx = 4;
    this.gameover = false;
    this.strike = 50;

    this.rhythm = new Rhythm(this.canvas, this.ctx).notes();
    this.pressedA = false;
    this.pressedW = false;
    this.pressedZ = false;
    this.pressedS = false;

  }

  draw() {

    const moves = new Moves(this.canvas. this.ctx);
    moves.dropMove();

    const panel = this.canvas.height - 300;

    this.rhythm.map(note => {
      note.drawNote();
      this.drawScore(this.ctx);
      this.drawResult(this.canvas, this.ctx, this.resultIdx);
      note.y += 2;

      if (note.y > panel) {
        note.y = 3000;
      }

      if (this.gameover === false &&
        ((note.x === 53 && note.y < panel + 4 && note.y > panel - 4 && this.pressedA === true) ||
        (note.x === 135 && note.y < panel + 4 && note.y > panel - 4 && this.pressedW === true) ||
        (note.x === 217 && note.y < panel + 4 && note.y > panel - 4 && this.pressedZ === true) ||
        (note.x === 262 && note.y < panel + 4 && note.y > panel - 4 && this.pressedS === true))) {

        this.score += 1;
        this.resultIdx = 0;
        this.ctx.fillStyle = 'pink';
        this.ctx.fillRect(50, this.canvas.height - 300, this.canvas.width - 100, 30);

        } else if ((note.x === 53 && note.y < panel + 4 && note.y > panel - 4 && this.pressedA === false) ||
        (note.x === 135 && note.y < panel + 4 && note.y > panel - 4 && this.pressedW === false) ||
        (note.x === 217 && note.y < panel + 4 && note.y > panel - 4 && this.pressedZ === false) ||
        (note.x === 262 && note.y < panel + 4 && note.y > panel - 4 && this.pressedS === false)) {

        this.resultIdx = 1;
      }
    });

    if (this.strike <= 0) {
      this.resultIdx = 3;
      this.strike = 0;
      this.drawLife(this.ctx);
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    } else if (this.score >= 30) {
      this.resultIdx = 2;
      this.drawWL(this.canvas, this.ctx, this.resultIdx);
      this.gameover = true;
      return;
    }


    requestAnimationFrame(this.drax.bind(this));
  }

  drawScore(ctx) {
    ctx.fillText(`Score: ${this.score}`, 130, 80);
  }

  drawLife(ctx) {
    ctx.fillText(`Life Remaining: ${this.strike}`, 460, 80);
  }

  drawWL(canvas, ctx, i) {
    ctx.fillStyle = 'pink';
    this.ctx.fillRect(200, 200, 200, 200);
    this.drawResult(canvas, ctx, i);
  }

  drawResult(canvas, ctx, i) {
    ctx.fillStyle = 'white';
    ctx.fillText(this.result[i], 300, this.canvas.height - 500);
  }

}

module.exports = Command;
