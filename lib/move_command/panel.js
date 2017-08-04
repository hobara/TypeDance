class Panel {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawPanel() {
    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#E5656E';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(100, this.canvas.height - 100, 100, 99);
    this.ctx.drawImage(panelLeft, 100, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.font = '20px Orbitron, sans-serif';
    this.ctx.fillText('A', 140, this.canvas.height - 120);

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#563EF3';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(200, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(panelUp, 200, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.font = '20px Orbitron, sans-serif';
    this.ctx.fillText('S', 240, this.canvas.height - 120);

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#563EF3';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(300, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(panelDown, 300, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.font = '20px Orbitron, sans-serif';
    this.ctx.fillText('D', 340, this.canvas.height - 120);

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#E5656E';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(400, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(panelRight, 400, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.font = '20px Orbitron, sans-serif';
    this.ctx.fillText('F', 440, this.canvas.height - 120);
  }
}

const panelLeft = new Image();
panelLeft.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738221/ddr_copy_3_wtrb4o.jpg';

const panelUp = new Image();
panelUp.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738285/ddr_copy_2_mw0shz.jpg';

const panelDown = new Image();
panelDown.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738351/ddr_copy_rmohsq.jpg';

const panelRight = new Image();
panelRight.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738412/ddr_p482ub.jpg';

export default Panel;
