let slider;
let slider1;
let slider2;
let tela;

function windowResized() {
    //console.log("windowResized");
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {

    tela = createCanvas(windowWidth, windowHeight);
    tela.position(0, 0);
    tela.style('z-index', '-1');

    slider = createSlider(0, 50, 25);
    slider1 = createSlider(0, 50, 25);
    slider2 = createSlider(0, 50, 25);

    /*slider.position(500, 100);
    slider1.position(500, 200);
    slider2.position(500, 300);*/

    //slider.child(slider1);
    slider.child([slider1, slider2]);

    slider.class("slider");
    slider1.class("slider1");
    slider2.class("slider2");
    background(51);



}

function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas(tela, 'capsulas-sonoras', 'jpg');
    }
}

function draw() {
    fill("#fff");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}

