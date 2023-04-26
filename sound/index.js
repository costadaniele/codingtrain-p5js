//  1 - let song = loadSound("file.mp3");
//  2 - let song;

var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var jumpButton;
var amp;

// preload
/* 3 function preload() {
    song = loadSound("sound/flora.mp3");
    
} */

function setup(){
   // 2 - song = loadSound("file.mp3");
   // 2 - slider = createSlider(0, 1, 0.5, 0.01);
   // 2 - song.play();
   createCanvas(500, 500);
   // callback
   song = loadSound("sound/flora.mp3", daniele);
   

   song.addCue(5, mudarCor);
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

   jumpButton = createButton("jump");
   jumpButton.mousePressed(pular);
   jumpButton.class("botao");
}

function mudarCor() {
    background(random(255), random(255), random(255));
}

function pular() {
    //let len = song.duration();
    song.jump(20);
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
    background(51);
    background(song.currentTime() * 10, 0, 255);
    song.setVolume(sliderVolume.value());
    song.pan(sliderPan.value());
    song.rate(sliderRate.value());
}