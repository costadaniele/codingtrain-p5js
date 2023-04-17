let tela;
let pontoX = 0;
let x;
let y;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');

    // functions e return  
    let correr = run(26.3);
    let correr2 = run(16.3);
    console.log(correr, correr2);
    //background(51); 
}

// functions e return  
function run(runrun){
    let correr = runrun + 4;
    return correr;
}

function draw() {
    background("#8D5A97");

    //funções básicas
    //ballCenter();
    //ballTela();

    // funções com parâmetros e argumentos
    ball(width/2, height/2, 20);
    ball(width/3, height/2, 20);
    ball(width/4, height/2, 20);
    ball(width/5, height/2, 20);

    //retangulo(x, y, diameter, corRet, corLinha, espessuraLinha)
    retangulo(width/2, 100, 50, '#FF0F80', '#FFAE03', 3);
    retangulo(width/2, 200, 50, '#026C7C', '#FFAE03', 3);
    retangulo(width/2, 300, 50, '#420039', '#FFAE03', 3);
    retangulo(width/2, 400, 50, '#593C8F', '#FFAE03', 3);
    retangulo(width/2, 500, 50, '#8EF9F3', '#FFAE03', 3);
}

//funções básicas

function ballCenter() {
    strokeWeight(2);
    stroke(255);
    let x = 0;
    while (x < width) {

        fill(51);
        ellipse(x, height / 2, 20, 20);
        //x = x + 50;
        x += 50;
    }
}

function ballTela() {
    // for (let i = 0; i < width; i = i + 50) {
    for (let i = 0; i <= mouseX; i = i + 50) {
        for (let j = 0; j < height; j = j + 50) {
            fill(0, random(255), random(255));
            ellipse(i, j, 20, 20);
        }
    }
}

 // funções com parâmetros e argumentos
function ball(x, y, diameter){
    ellipse(x, y, diameter, diameter);
}

function retangulo(x, y, diameter, corRet, corLinha, espessuraLinha){
    fill(corRet);
    stroke(corLinha);
    strokeWeight(espessuraLinha);
    rectMode(CENTER);
    rect(x, y, diameter, diameter);
}




