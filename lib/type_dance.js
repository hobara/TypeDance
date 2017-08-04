// hit/miss result needs to be a flash
// if its hit, change color of panel
// play/mute/restart button
// color styling
// should I update wireframe?

import Command from './move_command/command';
import Dance from './dancer/dancers';


document.addEventListener("DOMContentLoaded", () => {
  const moveCommandCanvas = document.getElementById('move-command-canvas');
  const moveCommandCtx = moveCommandCanvas.getContext('2d');
  const danceBoardCanvas = document.getElementById('dance-board-canvas');
  const danceBoardCtx = danceBoardCanvas.getContext('2d');

  const command = new Command(moveCommandCanvas, moveCommandCtx);
  moveCommandCanvas.width = 600;
  moveCommandCanvas.height = window.innerHeight;
  const dancer = new Dance(danceBoardCanvas, danceBoardCtx);

  function playGame() {
    const beforeMove = document.getElementById('move-command-canvas');
    const beforePlay = document.getElementById('audio');
    const intro = document.getElementById('intro-container');
    const startButton = document.getElementById('start');
    startButton.addEventListener("click", () => {
      startButton.id = 'hide';
      intro.id = 'hide';
      beforeMove.style = 'display: block';
      beforePlay.style = 'display: block';
      const music = document.getElementById('audio');
      music.play();

      command.ctx.clearRect(0, 0, command.canvas.width, command.canvas.height);
      setInterval(() => command.draw(), 10);
      setInterval(() => dancer.draw(), 170);
    });

    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.keyCode === 65) {
          command.pressedA = true;
          dancer.moveA();
        } else if (e.keyCode === 83) {
          command.pressedS = true;
          dancer.moveS();
        } else if (e.keyCode === 68) {
          command.pressedD = true;
          dancer.moveD();
        } else if (e.keyCode === 70) {
          command.pressedF = true;
          dancer.moveF();
        }
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      if (e.keyCode === 65) {
          command.pressedA = false;
        } else if (e.keyCode === 83) {
          command.pressedS = false;
        } else if (e.keyCode === 68) {
          command.pressedD = false;
        } else if (e.keyCode === 70) {
          command.pressedF = false;
        }
    });
  }

  playGame();
});
