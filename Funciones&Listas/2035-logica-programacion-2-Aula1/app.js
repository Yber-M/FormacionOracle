let numSecret = 0;
let numIntentos = 0;


condicionesInciales();

function generarNumSecret() {
    return Math.floor(Math.random() * 10) + 1;
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function vaciarEntrada() {
    document.querySelector('#varlorUsuario').value = '';
}

function verificarIntento() {
    let numInput = parseInt(document.getElementById('varlorUsuario').value);
    console.log('Numero de intentos = ' + numIntentos);
    if (numInput === numSecret) {
        asignarTexto('p', `MUY BIEN. Adivinaste el número en ${numIntentos} ${(numIntentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numInput > numSecret) {
            asignarTexto('p', 'El número es menor')
        } else {
            asignarTexto('p', 'El número es mayor')
        }
        numIntentos++;
        vaciarEntrada();
    }
    return;
}

function reiniciarGamer() {
    vaciarEntrada();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function condicionesInciales() {
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', 'Ingreso un número del 1 al 100');
    numSecret = generarNumSecret();
    numIntentos = 1;
    console.log(numSecret);
}
