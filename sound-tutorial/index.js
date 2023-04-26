var wave;
var button;
var playing;
var env;
var mic;

function setup() {
    createCanvas(500, 500);

    mic = new p5.AudioIn();
    mic.start();

    env = new p5.Env();
    env.setADSR(0.05, 0.1, 0.5, 1);
    env.setRange(1.2, 0); 

    wave = new p5.Oscillator();
    // square, triangle, sawtooth
    wave.setType('sine');
    wave.start();
    wave.freq(400);
    wave.amp(env);

    button = createButton('play/pause');
    button.mousePressed(tocar);
}

function draw() {
    background(200, 90, 90);
    var vol = mic.getLevel();
    console.log(vol);
    fill(51);
    rect(200, 200, vol * 200, vol * 200);
    ellipse(200, 200, vol * 300, vol * 300);

}

function tocar() {
    env.play();
    /*if (!playing) {
        playing = true;
    } else {
        wave.stop();
        playing = false;
    }*/
}

