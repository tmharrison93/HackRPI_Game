var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var FPS = 30;

var NEED_CHORD = "false";

var chord = {
    color: "#00A",
    x: 0,
    y: 0,
    width: 20,
    height: 30,
    first: "C",
    third: "E",
    fifth: "G",
    sprite: "null",
};



var current = 0;



var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
    "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

setInterval(function () {

    update();
    draw();
}, 1000 / FPS);


function getChords() {
    switch (Math.floor(Math.random() * 12) + 1) {
    case 1:
        chord.first = "C";
        chord.third = "E";
        chord.fifth = "G";
        break;
    case 2:
        chord.first = "C_sharp";
        chord.third = "F";
        chord.fifth = "G_sharp";
        break;
    case 3:
        chord.first = "D";
        chord.third = "F_sharp";
        chord.fifth = "A";
        break;
    case 4:
        chord.first = "D_sharp";
        chord.third = "G";
        chord.fifth = "A_sharp";
        break;
    case 5:
        chord.first = "E";
        chord.third = "G_sharp";
        chord.fifth = "B";
        break;
    case 6:
        chord.first = "F";
        chord.third = "A";
        chord.fifth = "C";
        break;
    case 7:
        chord.first = "F_sharp";
        chord.third = "A_sharp";
        chord.fifth = "C_sharp";
        break;
    case 8:
        chord.first = "G";
        chord.third = "B";
        chord.fifth = "D";
        break;
    case 9:
        chord.first = "G_sharp";
        chord.third = "C";
        chord.fifth = "D_sharp";
        break;
    case 10:
        chord.first = "A";
        chord.third = "C_sharp";
        chord.fifth = "E";
        break;
    case 11:
        chord.first = "A_sharp";
        chord.third = "D";
        chord.fifth = "F";
        break;
    case 12:
        chord.first = "B";
        chord.third = "D_sharp";
        chord.fifth = "F_sharp";
        break;
    default:
        console.log("error");
    }
    console.log(chord.first);
}

getChords();

function update() {


    if (keydown.space) {
        console.log("SPACE");
        getChords();
        chord.sprite = Sprite(chord.first);
    }

    if (keydown.C) {
    
        
    
    }

    if (keydown.right) {}


    var current = chord.first.toString();

}

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    chord.draw();

}



chord.sprite = Sprite(chord.first);

chord.draw = function () {
    this.sprite.draw(canvas, this.x, this.y);
};