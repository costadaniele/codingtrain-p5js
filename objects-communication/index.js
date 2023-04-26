/*let bubble1;
let bubble2;*/

let bubbles = [];

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
    // create object
    /*bubble1 = new Bubble(200, 200, 40);
    bubble2 = new Bubble(300, 200, 100);*/
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = (10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}



function draw() {
    background("#231942");
    /*for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].objetos();
    }*/

    for (b of bubbles) {
        b.move();
        b.objetos();
        let overlapping = false;
        for (other of bubbles) {
            if (b !== other && b.why(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            b.mudarCor(255);
        } else {
            b.mudarCor(0);
        }
    }

        /* if (bubble1.instersects(bubble2)) {
             background(200, 90, 90);
         }*/

        /* bubble1.move();
         bubble1.objetos();
         bubble2.move();
         bubble2.objetos();*/
    }

    // object template
    class Bubble {
        // setup
        constructor(x, y, r = 50) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.cor = 0;
        }

        why(other) {
            let d = dist(this.x, this.y, other.x, other.y);
            return (d < this.r + other.r);
            /*  if (d < this.r + other.r) {
                  return true;
              } else {
                  return false;
              } */
        }

        mudarCor(bcor) {
            this.cor = bcor;
        }

        move() {
            this.x = this.x + random(2, -2);
            this.y = this.y + random(2, -2);


        }

        objetos() {
            stroke("#ffffff");
            fill(this.cor, 50);
            //noFill();

            //  rect(this.x, this.y, this.r);
            ellipse(this.x, this.y, this.r);
            ellipse(this.x, this.y, this.r);
        }
    }



