let circleX;
let speedX = 1;

function setup() {
    createCanvas(500, 500);
    
    circleX = 0;
}

function draw() {
    background(200, 0, 100);
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(250, 250, 70, 20, 100);
    fill(51);

    ellipse(circleX, 150, 20, 20);
    circleX = circleX + speedX;

    if (circleX > width || circleX < 0) {
        speedX = speedX * -1;
    }

    if (mouseX > 220 && mouseX < 280 && mouseY > 240 && mouseY < 260) {
        ellipse(mouseX, mouseY, 20, 20);
    }
}

/*function mousePressed() {
    background(200);
}*/