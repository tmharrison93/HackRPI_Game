var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 400;
var FPS = 30;

var NEED_CHORD = "false";

var chord = {
    first: "C",
    third: "E",
    fifth: "G",
    sprite: "null",
};


var target = 0;

var elem;
var current = chord.first;
var currScore = 0;
var div_id = "first_check";
var delay = 3000;


var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
    "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#page_content');

canvas.font = "300px Verdana";



setInterval(function () {

    if (target === 1) {
        current = chord.third;
        div_id = "third_check";
    } else if (target === 2) {
        current = chord.fifth;
        div_id = "fifth_check";
    } else if (target === 0) {
        current = chord.first;
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

function clearCheckBoxes() {

    div_id = "first_check";
    elem = document.getElementById(div_id);
    elem.style.visibility = "hidden";
    div_id = "third_check";
    elem = document.getElementById(div_id);
    elem.style.visibility = "hidden";
    div_id = "fifth_check";
    elem = document.getElementById(div_id);
    elem.style.visibility = "hidden";
    div_id = "first_check";

}

function addPoint() {
    div_id = "score";
    elem = document.getElementById(div_id);
    currScore++;
    elem.innerHTML = currScore.toString();
    div_id = "first_check";

}
function subPoint() {
    div_id = "score";
    elem = document.getElementById(div_id);
    currScore--;
    elem.innerHTML = currScore.toString();
    div_id = "first_check";

}



function update() {

    getChords();
    target = 0;
    current = chord.first;
    chord.sprite = Sprite(chord.first);
    div_id = "first_check";
}
update();

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    chord.draw();

}

addEventListener("keypress", function (event) {
    var character = String.fromCharCode(event.charCode);
    if (character === character.toUpperCase()) {
        character = character + "_SHARP";
    }
    // console.log("char = " + character.toUpperCase());
    //console.log("curr = " + current);

    if (character.toUpperCase() === current) {
        target++;
        elem = document.getElementById(div_id);
        console.log(div_id);
        elem.style.visibility = "visible";
        //console.log("correct");
        //console.log(target);
    } else {
        //console.log("incorrect");
        elem = document.getElementById("incorrect");
        console.log(div_id);
        elem.style.visibility = "visible";
        setTimeout(reset_wrong, 500);
    }

    if (target === 3) {

        setTimeout(reset, 500);
    }
});

function reset() {

    update();
    clearCheckBoxes();
    addPoint();
}

function reset_wrong() {

    elem = document.getElementById("incorrect");
        console.log(div_id);
        elem.style.visibility = "hidden";
    update();
    clearCheckBoxes();
    subPoint();
}

function toChordSymbol(name) {

    console.log(name.toString().substring(1, 7));

    if (name.toString().substring(1, 7) === "_SHARP") {

        return (name.toString().substring(0, 1) + "#");

    } else {
        return (name);
    }

}

chord.draw = function () {
    //this.sprite.draw(canvas, this.x, this.y);

    console.log(chord.first.toString());
    chord_Symbol = toChordSymbol(chord.first);
    console.log(chord_Symbol);
    canvas.fillText(chord_Symbol, 0, 300);



};