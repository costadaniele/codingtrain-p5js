let bubble1;
let bubble2;
let bubble3;
let bubble4;
let r, g, b;

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
    background("#231942");
    // create object
    bubble1 = new Bubble(width, height, 20);
    bubble2 = new Bubble(width/2, height/2, 20);
    bubble3 = new Bubble(width/3, height/3, 20);
    bubble4 = new Bubble(width/4, height/4, 20);
    //console.log(bubble.x, bubble.y);
}



function draw() {
    
    bubble1.move();
    bubble1.objetos();
    bubble2.move();
    bubble2.objetos();
    bubble3.move();
    bubble3.objetos();
    bubble4.move();
    bubble4.objetos();
    r = random(240);
    g = random(200);
    b = random(8);
}

// object template
class Bubble {
    // setup
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move(){
        this.x = this.x + random(5, -5);
        this.y = this.y + random(5, -5);
       
    
    }

    objetos(){
        stroke("#231942");
        fill(r,g,b);
        
        rect(this.x, this.y, this.r);
        ellipse(this.x, this.y, this.r);
    }
}



