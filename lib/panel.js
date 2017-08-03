class Panel {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    // this.color = '#00BFA5';
  }

  drawPanel() {
    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#9E832E';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(100, this.canvas.height - 100, 100, 99);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.fillText('←← A', 110, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#9E2E47';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(200, this.canvas.height - 100, 100, 99);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.fillText('↑↑ W', 210, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#6A75A0';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(300, this.canvas.height - 100, 100, 99);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.fillText('↓↓ S', 310, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#258193';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(400, this.canvas.height - 100, 100, 99);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.fillText('→→ E', 410, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    // this.ctx.beginPath();
    // this.ctx.moveTo(100, this.canvas.height);
    // this.ctx.lineTo(500, this.canvas.height);
    // this.ctx.stroke();
    // this.ctx.strokeStyle = this.color;
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(100, this.canvas.height - 100);
    // this.ctx.lineTo(500, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(100, this.canvas.height);
    // this.ctx.lineTo(100, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(200, this.canvas.height);
    // this.ctx.lineTo(200, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(300, this.canvas.height);
    // this.ctx.lineTo(300, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(400, this.canvas.height);
    // this.ctx.lineTo(400, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
    //
    // this.ctx.beginPath();
    // this.ctx.moveTo(500, this.canvas.height);
    // this.ctx.lineTo(500, this.canvas.height - 100);
    // this.ctx.strokeStyle=this.color;
    // this.ctx.stroke();
  }
}
export default Panel;
