import { conexApi } from "./conexApi.js";
import { crearCard } from "./mostrarVideos.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector('[data-busqueda]').value;
    const busqueda = await conexApi.buscarVideo(datosDeBusqueda);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));

    if (busqueda.length == 0) {
        lista.innerHTML = `<h2 class='mensaje__titulo'>No fueron encontrados los elementos para "${datosDeBusqueda}"<h2>`;
    }
}

const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function (enter) {
    var key = enter.which || enter.keyCode;
    if (key == 13) {
        filtrarVideo(enter);
    }
})

const boton = document.querySelector('[data-boton-busqueda]');

boton.addEventListener('click', evento => filtrarVideo(evento));