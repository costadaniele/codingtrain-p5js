function setup() {
    createCanvas(1000, 500);
    
    //
}

function draw() {
    background(51);
    if (mouseX > 500) {
        noStroke();
        fill(255);
        rect(0, 0, 500, 500);
        noStroke();
        fill(200);
        ellipse(900, 100, 20, 20);
        ellipse(750, 250, 20, 20);
        ellipse(900, 400, 20, 20);
    } else if (mouseX < 500) {
        background(255);
        noStroke();
        fill(51);
        rect(0, 0, 500, 500);
        noStroke();
        fill(200);
        ellipse(100, 100, 20, 20);
        ellipse(250, 250, 20, 20);
        ellipse(100, 400, 20, 20);

    }

}