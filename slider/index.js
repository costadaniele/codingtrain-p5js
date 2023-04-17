let sliders = [];
let angle = 0;


function setup() {
    noCanvas();
    for (let i = 0; i < 234; i++) {
        sliders[i] = createSlider(0, 255, 50);
    }
}

function draw() {
    let offset = 0;
    for (let i = 0; i < sliders.length; i++) {
        let x = map(sin(angle+offset), -1, 1, 0, 255);
        sliders[i].value(x);
        //offset += 0.025;
        offset += 0.025;
    }
    angle += 0.1;
}

