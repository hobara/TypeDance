
var SpriteSheet = require('./SpriteSheet');
var canvas = document.getElementById('dance-board-canvas');
var context = canvas.getContext('2d');

var x = 0; //Position for Murrio

var walk_texture = new Image();
walk_texture.src =
// "https://res.cloudinary.com/hobara/image/upload/v1501608499/imageedit_3_4317995488_dt1bgp.png";
"https://res.cloudinary.com/hobara/image/upload/v1501608500/imageedit_4_5539414729_ca4fwg.png";

// "https://rawgit.com/ErikLarsson82/SpriteSheet/master/testbed/walk_texture.png";
// '../assets/images/dance_move2.png';

var walk_spritesheet = SpriteSheet.new(walk_texture, {
    frames: [110, 110, 110, 110, 110, 110, 110, 110, 110], //Each frame defined by the amount of time it will be rendered before moving on
    x: 140, //Start coordinates of the sequence
    y: 60,
    width: 110, //Size of each frame. Only supports one frame size for all
    height: 230,
    restart: true, //Loops the sequence
    autoPlay: true, //Starts the
});

var gameLoop = function(delta) {
     x = x;
      // + 0.2 * delta; //Modify the position
    if (x > 600) x = 0;
    //Do this every game loop, advances the sequence by a 60th of a second by default. Will not advance if paused, so call this always and let the internal state dictate if the tick takes effect
    walk_spritesheet.tick();

    context.fillStyle = "#004080"; //Clear the background
    context.fillRect(140,80,110,220);
    //Use your own methods for placing and rotating the canvas before drawing, here we use the external variable "x"
    context.save();
    context.translate(x, 30);

    //Draw the current sprite in the texture
    walk_spritesheet.draw(context);

    context.restore();
};

setInterval(function() { gameLoop(1000/60); }, 50);
