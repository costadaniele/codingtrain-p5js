let dropzone;

function setup() {
    noCanvas();

    dropzone = select('#dropzone');
    dropzone.dragOver(arrastar);
    dropzone.dragLeave(deixar);
    dropzone.drop(gotFile, deixar);
}

function gotFile(file) {
    createP(file.name + ' ' + file.size);
    createP(file.type);
    createP(file.size);
    let tamanho = createImg(file.data);
    tamanho.size(100, 100);
}

function arrastar() {
    dropzone.style('background', 'green');
}

function deixar() {
    dropzone.style('background', 'orange');
}