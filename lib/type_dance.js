// import Animation from './animation';

import Command from './move_command';
import gameLoop from './ref/dancer';


document.addEventListener("DOMContentLoaded", () => {
  const moveCommandCanvas = document.getElementById('move-command-canvas');
  const moveCommandCtx = moveCommandCanvas.getContext('2d');
  // const danceBoardCanvas = document.getElementById('dance-board-canvas');
  // const danceBoardCtx = danceBoardCanvas.getContext('2d');

  function playGame() {
    moveCommandCanvas.width = 600;
    moveCommandCanvas.height = window.innerHeight;
    const command = new Command(moveCommandCanvas, moveCommandCtx);

    command.draw();
    // const dancer = new Dancer(danceBoardCanvas, danceBoardCtx);
    // dancer.draw();
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.keyCode === 65) {
          command.pressedA = true;
        } else if (e.keyCode === 87) {
          command.pressedW = true;
        } else if (e.keyCode === 83) {
          command.pressedS = true;
        } else if (e.keyCode === 69) {
          command.pressedE = true;
        }
    });

    document.addEventListener("keyup", (e) => {
      e.preventDefault();
      if (e.keyCode === 65) {
          command.pressedA = false;
        } else if (e.keyCode === 87) {
          command.pressedW = false;
        } else if (e.keyCode === 83) {
          command.pressedS = false;
        } else if (e.keyCode === 69) {
          command.pressedE = false;
        }
    });
  }




  playGame();
  gameLoop(1000/60);
});
