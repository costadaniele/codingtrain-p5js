let tela;
let x = 200;
let y = 200;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
    tela = createGraphics(windowWidth, windowHeight);
    tela.clear();
    background(51);
}

function draw() {
    background(51);
    x += random(-5, 5);
    y += random(-5, 5);
    

    //if (mouseIsPressed) {
        
        let starX = random(width);
        let starY = random(height);
        tela.ellipse(starX, starY, 10, 10);
    //}

    image(tela, 0, 0);
    rectMode(CENTER);
    rect(x, y, 30, 30);
}






