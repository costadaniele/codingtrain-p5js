let tela;
let pontoX = 0;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
    //background(51); 
}

function draw() {
    background("#8D5A97");
    strokeWeight(2);
    stroke(255);
    let x = 0;
    while (x < width) {

        fill(51);
        ellipse(x, height / 2, 20, 20);
        //x = x + 50;
        x += 50;
    }

   // for (let i = 0; i < width; i = i + 50) {
    for (let i = 0; i <= mouseX; i = i + 50) {
        for (let j = 0; j < height; j = j + 50) {
            fill(0, random(255), random(255));
            ellipse(i, j, 20, 20);
        }
    }
}






