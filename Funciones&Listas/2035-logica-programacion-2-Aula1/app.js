let numSecret = generarNumSecret();

console.log(numSecret);

function generarNumSecret() {
    return Math.floor(Math.random() * 10) + 1;
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numInput = parseInt(document.getElementById('varlorUsuario').value);
    if (numInput === numSecret) {
        asignarTexto('p', 'MUY BIEN. Adivinaste correctamente el número')
    } else {
        asignarTexto('p', 'VUELVE A INTENTARLO. Ingreso un número del 1 al 100');
    }
    return;
}


asignarTexto('h1', 'Juego del número secreto');
asignarTexto('p', 'Ingreso un número del 1 al 100');