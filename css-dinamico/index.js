let palavras = ['amor', 'love', 'oração', 'paz', 'tranquilidade'];
let palavra;
let excluir = [];


function setup() {
    for (let i = 0; i < palavras.length; i++) {
        //palavra = createP("amor");
        palavra = createElement("p", palavras[i]);
        let x = floor(random(windowWidth)); 
        let y = floor(random(windowHeight));
        palavra.position(x,y);
        palavra.class("cor");
    }

    for (let i = 0; i < 10; i++) {
        palavra = createP("felicidade");
        //palavra = createElement("p", palavras[i]);
        let x = floor(random(windowWidth)); 
        let y = floor(random(windowHeight));
        palavra.position(x,y);
        palavra.class('sol');
    }

    for (let i = 0; i < 10; i++) {
        palavra = createA("http://google.com.br/", "google");
        //palavra = createElement("p", palavras[i]);
        let x = floor(random(windowWidth)); 
        let y = floor(random(windowHeight));
        palavra.position(x,y);
        palavra.class('nuvem');
    }

    let button = select('#clear');
    button.mousePressed(remover);

    excluir.push(palavra);

}

function remover() {
    for (let j = 0; j < excluir.length; j++) {
        excluir[j].remove();
    }
}