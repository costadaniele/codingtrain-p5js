let x, y;
let r, g, b;
let on = false;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
    background("#FFEC51");
    
}

function draw() {
    noStroke();
    fill(random(0, 255, 100));
    //background("#ECA72C");
    ellipse(mouseX, mouseY, 10, 10);

    r = random(0, 255);
    g = 0;
    b = random(0, 255);
    x = random(0, width);
    y = random(0, height);
    noStroke();
    fill(r, g, b);
    circle(x, y, 15);

    if (on) {
        background("#7776BC");
    }
}

function mousePressed() {
    on = !on;
    background("#ECA72C");
}


