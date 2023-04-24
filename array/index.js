let nums = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let num = [10];
let r, g, b;
let palavras = ["fé", "alegria", "paz", "amor"];
let x = 100;



let index = 0;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

// object instances
function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');
   // background("#231942");


}

function draw() {
    background("#231942");
    r = color(240, 200, 8);
    g = color(255, 114, 159);
    b = random(8);

    fill(r);
    ellipse(100, height / 2, nums[0], nums[0]);
    ellipse(200, height / 2, nums[1], nums[1]);
    ellipse(300, height / 2, nums[2], nums[2]);
    ellipse(400, height / 2, nums[index], nums[index]);
    ellipse(500, height / 2, num, num);

    fill(255);
    textSize(24);
    text(palavras[index], 600, height / 2);

    stroke(255);
    noFill();
    for (var i = 0; i < nums.length; i++) {
        ellipse(800, height / 2, nums[i], nums[i]);

        
       // fill(r);
        stroke(g);
       // strokeWeight(2);
        rect(900, height / 2, nums[i], nums[i]);
        ellipse(i * 100 + 100, height / 4, nums[i], nums[i]);
        rect(i * 100 + 100, height / 8, nums[i], nums[i]);
    }
}

function mousePressed() {
    index = index + 1;

    if (index === palavras.length) {
        index = 0;
    }

    if (index === nums.length) {
        index = 0;
    }

}




