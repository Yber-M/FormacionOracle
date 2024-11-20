function uno(dos) {
    console.log('Uno');
    setTimeout(dos, 2000)
}

function dos() {
    console.log('Dos');
}

setTimeout(() => uno(dos), 5000)

const nombre = function () {
    console.log('Nombre');
}

// nombre();

const persona = () => console.log('Yber');

// persona();

// () => console.log('Hola');