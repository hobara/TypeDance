// import Animation from './animation';

const Command = require('./move_command');
// import Dancer from './ref/dancer';

document.addEventListener("DOMContentLoaded", () => {
  const moveCommandCanvas = document.getElementById('move-command-canvas');
  const moveCommandCtx = moveCommandCanvas.getContext('2d');
  const danceBoardCanvas = document.getElementById('dance-board-canvas');
  const danceBoardCtx = danceBoardCanvas.getContext('2d');

  function playGame() {
    moveCommandCanvas.width = 600;
    moveCommandCanvas.height = window.innerHeight;
    const command = new Command(moveCommandCanvas, moveCommandCtx);
    command.draw();

    // const dancer = new Dancer(danceBoardCanvas, danceBoardCtx);
    // dancer.draw();
  }

  playGame();
});
