function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const sonidoSeleccionado = tecla.classList[1];
    const idAudio = `#sonido_${sonidoSeleccionado}`;

    tecla.onclick = function () {
        playSonido(idAudio);
    };

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('activa');
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }

}