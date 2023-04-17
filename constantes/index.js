let x = 0;
let velocidade = 2;
let on = false;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
}

/*function draw() {
    noStroke();
    fill("#F39237");
    background("#0E79B2");
    if (mouseX > width / 2) {
        noStroke();
        background("#191923");
        fill("#FBFEF9"); 
    }
    ellipse(width / 2, height / 2, 100, 100);
}*/

function draw() {
    noStroke();
    fill("#F39237");
    background("#0E79B2");
    ellipse(x, height / 2, 100, 100);
    x = x + velocidade;

    if (x > width / 2) {

        noStroke();
        background("#191923");
        fill("#FBFEF9");
        ellipse(x, height / 2, 100, 100);
    }

    if (x > width || x < 0) {
        velocidade = velocidade * -1;
    }

    // boolean
    if (on) {
        fill(51);
        arc(width / 2, height / 2, 100, 100, 0,PI + QUARTER_PI, OPEN);
    }  
}

// boolean 
/*function mousePressed() {
    if (on) {
        on = false;
    } else {
        on = true;
    }
}*/

function mousePressed() {
    on = !on;
}

