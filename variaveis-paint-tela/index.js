let x, y, x1, y1;
let r, g, b;
let tela;

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
    r = random(255);
    g = random(192)
    b = random(203); 
    x = random(0, width);
    y = random(0, height);
    x1 = random(0, 100);
    y1 = random(0, 100);
    stroke(200);
    //strokeWeight(5);
    fill(51);
    //fill(r, g, b, 100);
   // rect(x, y, x1, y1);
    rect(x, y, x1, y1);
}


function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}

