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


var target = 0;
var current = chord.first;


var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
    "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');

setInterval(function () {

    if (target === 1) {
        current = chord.third;
    } else if (target === 2) {
        current = chord.fifth;
    }

    //  update();
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
        chord.first = "C_SHARP";
        chord.third = "F";
        chord.fifth = "G_SHARP";
        break;
    case 3:
        chord.first = "D";
        chord.third = "F_SHARP";
        chord.fifth = "A";
        break;
    case 4:
        chord.first = "D_SHARP";
        chord.third = "G";
        chord.fifth = "A_SHARP";
        break;
    case 5:
        chord.first = "E";
        chord.third = "G_SHARP";
        chord.fifth = "B";
        break;
    case 6:
        chord.first = "F";
        chord.third = "A";
        chord.fifth = "C";
        break;
    case 7:
        chord.first = "F_SHARP";
        chord.third = "A_SHARP";
        chord.fifth = "C_SHARP";
        break;
    case 8:
        chord.first = "G";
        chord.third = "B";
        chord.fifth = "D";
        break;
    case 9:
        chord.first = "G_SHARP";
        chord.third = "C";
        chord.fifth = "D_SHARP";
        break;
    case 10:
        chord.first = "A";
        chord.third = "C_SHARP";
        chord.fifth = "E";
        break;
    case 11:
        chord.first = "A_SHARP";
        chord.third = "D";
        chord.fifth = "F";
        break;
    case 12:
        chord.first = "B";
        chord.third = "D_SHARP";
        chord.fifth = "F_SHARP";
        break;
    default:
        console.log("error");
    }
    //console.log(chord.first);
}



function update() {

    getChords();
    target = 0;
    current = chord.first;
    chord.sprite = Sprite(chord.first);

}
update();

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    chord.draw();

}

addEventListener("keypress", function (event) {
    var character = String.fromCharCode(event.charCode);
    if(character === character.toUpperCase()){
     character = character + "_SHARP";   
    }
    console.log("char = " + character.toUpperCase());
    console.log("curr = " + current);

    if (character.toUpperCase() === current) {
        target++;
        console.log("correct");
        console.log(target);
    } else {
        console.log("incorrect");
    }

    if (target === 3) {
        update();
    }
});






chord.draw = function () {
    this.sprite.draw(canvas, this.x, this.y);
};