let tela;
let col = 0;
let r = 0;
let b = 255;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
    background(51);
    
}

function draw() {
    r = map(mouseX, 0, height, 0, 255);
    b = map(mouseX, 0, height, 255, 0);
    background(r, 100, b);
    noStroke();
    fill("#F1A208");
    ellipse(mouseX, height/2, 64, 64);
}


function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}

