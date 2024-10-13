function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const sonidoSeleccionado = tecla.classList[1];
    const idAudio = `#sonido_${sonidoSeleccionado}`;
    console.log(idAudio);

    tecla.onclick = function () {
        playSonido(idAudio);
    };
}