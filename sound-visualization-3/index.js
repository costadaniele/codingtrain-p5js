
var fft;
var song;
var button;
var teste = [];
var w;

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
    colorMode(HSB);
    angleMode(DEGREES);
    button = createButton('tocar');
    button.mousePressed(tocar);
    song.play();

    //rect
    /*fft = new p5.FFT(0, 64);
    w = width /64;*/

    //ellipse
    fft = new p5.FFT(0, 256);
}

function draw() {
    background(0);
   
    var spectrum = fft.analyze();
    stroke(255);
   
    // rect
   /* for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 256, height, 0);
        fill(i, 255, 255);
        noStroke();
        //line (i, height, i, y);
        //line (i*w, height, i*w, y);
        rect (i*w, y, w - 2, height - y);
    } */

    //ellipse
    translate(width/2, height/2);
    //beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 20, 100);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(i, 255, 255);
        line(0, 0, x, y);
        //vertex(x, y);
    }
    //endShape();
    

    
}





