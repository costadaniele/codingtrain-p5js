//  1 - let song = loadSound("file.mp3");
//  2 - let song;

var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var amp;

// preload
/* 3 function preload() {
    song = loadSound("sound/flora.mp3");
    
} */

function setup() {
    // 2 - song = loadSound("file.mp3");
    // 2 - slider = createSlider(0, 1, 0.5, 0.01);
    // 2 - song.play();
    createCanvas(500, 500);
    // callback
    song = loadSound("sound/flora.mp3", daniele);
    amp = new p5.Amplitude();
    background(51);
}

// callback
function daniele() {
    song.play();
    sliderVolume = createP("Volume");
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createP("Rate");
    sliderRate = createSlider(0, 1.5, 1, 0.01);
    sliderPan = createP("Pan");
    sliderPan = createSlider(-1, 0.5, 1, 0.01);
    button = createButton("play");
    button.mousePressed(tocar);
    button.class("botao");
}


function tocar() {
    if (!song.isPlaying()) {
        song.play();
        button.html("play");
    } else {
        //song.stop();
        song.pause();
        button.html("pause");
    }
}

function draw() {
   
    var vol = amp.getLevel();
    var diam = map(vol, 0, 1, 10, 300);
    fill(51);
    stroke(255);
   // strokeWeight(2);
    ellipse(width / 2, height / 2, diam, diam);
}