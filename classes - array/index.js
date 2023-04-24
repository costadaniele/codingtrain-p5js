let bubbles = [];
let red, g, b;
// encapsulamento

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

// object instances
function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
    //background("#40376E");
    // create object
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        bubbles[i] = new Bubble(x, y, r);
    }
}

//function mousePressed() {
    function mouseDragged() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}



function draw() {
    

    red = random(147, 0);
    g = random(95, 0);
    b = random(167, 0);

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].objetos();
    }
}

// object template
class Bubble {
    // setup
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(5, -5);
        this.y = this.y + random(5, -5);


    }

    objetos() {
       // stroke("#40376E");
        //noStroke();
        fill(red, g, b);

       rect(this.x, this.y, this.r);
        //ellipse(this.x, this.y, this.r);
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}


