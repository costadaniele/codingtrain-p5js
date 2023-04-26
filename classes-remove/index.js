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
        let r = random(5, 10);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
        //bubbles[i] = new Bubble(x, y, r);
    }
}

// criar bolhas na tela

/*function mouseDragged() {
        //let x = random(width);
        //let y = random(height);
        let r = 40;
        let b = new Bubble(mouseX, mouseY, r);
        bubbles.push(b);
}*/

// estourar bolhas na tela

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
    // for (let i = bubbles.length-1; i >= 0; i--) {
        if (bubbles[i].delete(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
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
        if (bubbles[i].delete(mouseX, mouseY)) {
            bubbles[i].mudarCor(255);
        } else {
            bubbles[i].mudarCor(200);
        }
        bubbles[i].move();
        bubbles[i].objetos();
    }

    if (bubbles.length > 10) {
        bubbles.splice(0, 1);
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

    /*clique(x1, y2) {
        let d = dist(x1, y2, this.x, this.y);
        if (d < this.r) {
            this.cor = 200;
            console.log("ok");
        }
    }*/

    mudarCor(bcor) {
        this.cor = bcor;
    }

    delete(x1, y2) {
        let d = dist(x1, y2, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }


    move() {
        this.x = this.x + random(1, -1);
        this.y = this.y + random(1, -1);


    }

    objetos() {
        //strokeWeight(2);
        //stroke("#ffffff");
        noStroke();
        fill(this.cor, 50);
        //noFill();
        rect(this.x, this.y, this.r);
        //ellipse(this.x, this.y, this.r);
    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}


