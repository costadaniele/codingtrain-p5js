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
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    //bubbles[i] = new Bubble(x, y, r);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clique(mouseX, mouseY);
    }
}

/*function mousePressed() {
    //function mouseDragged() {
    let r = random(10, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}*/



function draw() {

    background("#40376E");
    red = random(147, 0);
    g = random(95, 0);
    b = random(167, 0);

    /*bubble.move();
    bubble.objetos();*/

    /* for (let bubble of bubbles) {
         bubble.move();
         bubble.objetos();
     } */

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
        this.cor = 0;
    }

    clique(x1, y2) {
        let d = dist(x1, y2, this.x, this.y);
        if (d < this.r) {
            this.cor = 200;
            console.log("ok");
        }
    }

    move() {
        this.x = this.x + random(3, -3);
        this.y = this.y + random(3, -3);


    }

    objetos() {
        strokeWeight(2);
        stroke("#ffffff");
        //noStroke();
        fill(this.cor, 50);
        //noFill();
        ellipse(this.x, this.y, this.r);
        //ellipse(this.x, this.y, this.r);
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}


