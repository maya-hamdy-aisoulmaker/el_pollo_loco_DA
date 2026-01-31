let canvas;
let ctx;
let world;



function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  world = new World();
  draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    world.draw(ctx);
}
