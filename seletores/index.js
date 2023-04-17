let h1;
let lista = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

function setup() {
    noCanvas();

    let button = select('#button');
    button.mousePressed(clique);
    //let canvas = createCanvas(500, 500);
    //canvas.parent('#seletorID');
    background('#9f86c0');

    h1 = select('#seletorID');
    h1.style("color", "#ff006e");
    h1.position(400, 100);
    // hover
    h1.mouseOver(desbrilho);
    h1.mouseOut(brilho);


    let paragraphs = selectAll('p');
    //var paragraphs = selectAll('.classeMestre');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style("font-size", "10px");
        // hover
        paragraphs[i].mouseOver(desbrilho);
        paragraphs[i].mouseOut(brilho);

    }

}

function clique() {
    let x = floor(random(0, lista.length));
    //createP(lista[x]);
    let li = createElement("li", lista[x]);
    li.child('#lista-ordenada');
    //li.parent('#lista-ordenada');
}

// hover
function desbrilho() {
    h1.style("background", '#F2FF49');
    this.style('background', '#F2FF49');
    this.style('margin', '10px');
}

function brilho() {
    h1.style("background", '#645DD7');
    this.style('background', '#645DD7');
}


function draw() {

}