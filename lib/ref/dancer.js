
const SpriteSheet = require('./SpriteSheet');
const dancer = document.getElementById('dance-board-canvas');
const context = dancer.getContext('2d');

let x = 0;
const walk_texture = new Image();
walk_texture.src =
// "https://res.cloudinary.com/hobara/image/upload/v1501608499/imageedit_3_4317995488_dt1bgp.png";
"https://res.cloudinary.com/hobara/image/upload/v1501608500/imageedit_4_5539414729_ca4fwg.png";
// "https://rawgit.com/ErikLarsson82/SpriteSheet/master/testbed/walk_texture.png";
// '../assets/images/dance_move2.png';

const walk_spritesheet = SpriteSheet.new(walk_texture, {
    frames: [90, 90, 90, 90, 90, 90, 90, 90, 90], //Each frame defined by the amount of time it will be rendered before moving on
    x: 140,
    y: 260,
    width: 110,
    height: 280,
    restart: true, //Loops the sequence
    autoPlay: true, //Starts the
});
const walk_spritesheet2 = SpriteSheet.new(walk_texture, {
    frames: [90, 90, 90, 90, 90, 90, 90, 90, 90], //Each frame defined by the amount of time it will be rendered before moving on
    x: 250,
    y: 260,
    width: 110,
    height: 280,
    restart: true, //Loops the sequence
    autoPlay: true, //Starts the
});
const walk_spritesheet3 = SpriteSheet.new(walk_texture, {
    frames: [90, 90, 90, 90, 90, 90, 90, 90, 90], //Each frame defined by the amount of time it will be rendered before moving on
    x: 360,
    y: 260,
    width: 110,
    height: 280,
    restart: true, //Loops the sequence
    autoPlay: true, //Starts the
});

const gameLoop = function(delta) {
    context.clearRect(140,280,110,220);
    context.clearRect(250,280,110,220);
    context.clearRect(360,280,110,220);
     x = x;
      // + 0.2 * delta; //Modify the position
    if (x > 600) x = 0;
    //Do this every game loop, advances the sequence by a 60th of a second by default. Will not advance if paused, so call this always and let the internal state dictate if the tick takes effect
    walk_spritesheet.tick();
    walk_spritesheet2.tick();
    walk_spritesheet3.tick();
    context.height = '100%';
    context.fillStyle = "transparent"; //Clear the background
    // context.fillStyle = "transparent"; //Clear the background
    context.fillRect(140,280,110,220);
    context.fillRect(250,280,110,220);
    context.fillRect(360,280,110,220);
    //Use your own methods for placing and rotating the canvas before drawing, here we use the external variable "x"
    context.save();
    context.translate(x, 30);
    //Draw the current sprite in the texture
    walk_spritesheet.draw(context);
    walk_spritesheet2.draw(context);
    walk_spritesheet3.draw(context);
    // context.clearContext();
    context.restore();
};

setInterval(function() { gameLoop(1000/60); }, 50);
export default gameLoop;
