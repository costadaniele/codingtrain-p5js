
var amp;
var song;
var button;
var teste = [];

var volHistory = [];

function tocar() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound("./sound/flora.mp3");
}

function setup() {
    createCanvas(500, 500);
    
    angleMode(DEGREES);
    button = createButton('tocar');
    button.mousePressed(tocar);
    song.play();
    amp = new p5.Amplitude();

}

function draw() {
    background(0);
    var vol = amp.getLevel();
    volHistory.push(vol);
    stroke(255);
    fill(200, 80, 70);

    // translate(width / 2, height / 2); 
    /*beginShape();
    for (var i = 0; i < 360; i++) {
        var r = map(volHistory[i], 0, 1, 50, 300);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    if (volHistory.lenght > 360) {
        volHistory.splice(0, 1);
    }*/

    var vol = amp.getLevel();
    volHistory.push(vol);
    stroke(255);
    noFill();

    beginShape();
    for (var i = 0; i < volHistory.length; i++) {
        var y = map(volHistory[i], 0, 1, height / 2, 0);
        // point(i, y);
        vertex(i, y);
    }
    endShape();

    if (volHistory.length > width) {
        volHistory.splice(0, 1);
    }
}





