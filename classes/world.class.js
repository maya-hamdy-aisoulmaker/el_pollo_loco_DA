class World {


character = new Character();

enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];

ctx;

constructor(canvas){
this.ctx = canvas.getContext("2d");
this.draw();
}

draw() {
    this.ctx.clearRect(0, 0, 720, 480);

    this.ctx.drawImage(
        this.character.img,
        this.character.x,
        this.character.y,
        this.character.width,
        this.character.height
    );

    requestAnimationFrame(() => this.draw());
}
}