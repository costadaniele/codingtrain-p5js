let h1, h2, titulo;
let tela;
let botao;
let bSlider, aSlider;
let bInput;
let palavra;
let fraseInput;

function setup() {
    // Tamanho e posição da tela
    tela = createCanvas(300, 300);
    tela.position(500, 150);
        
    // Título - CSS
    titulo = createElement("h1", "P5.JS");
    titulo.style("color", "#DC0073");
    titulo.position(600, 0);
   
    // texto no meio da tela
    h1 = createElement("h1", "Hello World");
    h1.position (575, 280);
    
    // Botão para mudar texto na tela
    botao = createButton("clique");
    botao.mousePressed(mudarPalavra);
    botao.position(600, 70)
    // (min, max, meio);
    // mudar tamanho da ellipse
    bSlider = createSlider(10, 100, 86);
    bSlider.position (580, 100);

    // evento ao passar o mouse
    h2 = createElement("h2", "Passe o mouse");
    h2.position (600, 480);
    h2.mouseOver(passeOMouse);
    h2.mouseOut(repasseOMouse);

    // registra a palavra quando clica no enter
    palavra = createP('Digite uma frase');
    bInput = createInput("Digite uma frase ");
    //bInput.changed(salvarTexto);
    // Usando a DOM
    bInput.input(salvarTexto);

    // slider para mudar fonte
    aSlider = createSlider(0, 50, 25);
    aSlider.position (20, 30);
    aSlider.input(updateSize);
}

function updateSize(){
    palavra.style('font-size', aSlider.value() + "pt");
}

function salvarTexto() {
    palavra.html(bInput.value());
}

function passeOMouse() {
    h2.html('pra dizer');
    h2.style("background", "#ef476f");
}

function repasseOMouse( ) {
    h2.html('que te amo');
    h2.style("background", "#f15bb5");
    h2.style("color", "white");
}


//function mousePressed() {
    function mudarPalavra(){
    background("#DC0073");
    // mostra número aleatórios
    createP("Cores aleatórias em: " + color(random(255)));
    h1.html("Bem-vindo!");
    //createP("Hello World " + random(0, 10));
    
    //createDiv();
    //createButton();
    //createImg();

}


function draw() {
    //texto dentro da tela
    background("#DC0073");
    noStroke();
    fill("#affc41");
    //(texto, position x, position y);
    text(bInput.value(), 100, 20);

    // ellipse que aumenta com o slider
    stroke("#F5B700");
    fill("#DC0073");
    ellipse(150, 130, bSlider.value(), bSlider.value());
}

