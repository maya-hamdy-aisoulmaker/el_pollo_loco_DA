
let canvas;
let ctx;
let charakter = new movableObject();


function init () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    charakter.src = "../img_pollo_locco/img/2_character_pepe/2_walk/W-21.png";

    ctx.drawImage(charakter, 20, 20, 50, 150);
}