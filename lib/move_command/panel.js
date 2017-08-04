const imageObj = new Image();
imageObj.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738221/ddr_copy_3_wtrb4o.jpg';

const imageObj2 = new Image();
imageObj2.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738285/ddr_copy_2_mw0shz.jpg';

const imageObj3 = new Image();
imageObj3.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738351/ddr_copy_rmohsq.jpg';

const imageObj4 = new Image();
imageObj4.src = 'https://res.cloudinary.com/hobara/image/upload/c_scale,h_99,w_100/v1501738412/ddr_p482ub.jpg';

class Panel {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    // this.color = '#00BFA5';
  }

  drawPanel() {
    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#E5656E';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(100, this.canvas.height - 100, 100, 99);
    this.ctx.drawImage(imageObj, 100, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.fillText('← A', 120, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#563EF3';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(200, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(imageObj2, 200, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.fillText('↑ S', 220, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#563EF3';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(300, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(imageObj3, 300, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.fillText('↓ D', 320, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';

    this.ctx.beginPath();
    this.ctx.lineWidth = '2';
    this.ctx.fillStyle = '#E5656E';
    this.ctx.strokeStyle = 'navy';
    this.ctx.rect(400, this.canvas.height - 100, 100, 99);

    this.ctx.drawImage(imageObj4, 400, this.canvas.height - 100);
    this.ctx.stroke();
    // this.ctx.fill();
    this.ctx.fillText('→ F', 420, this.canvas.height - 120);
    this.ctx.font = '20px Orbitron, sans-serif';
  }
}
export default Panel;
