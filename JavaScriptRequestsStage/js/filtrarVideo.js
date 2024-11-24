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

}

const boton = document.querySelector('[data-boton-busqueda]');

boton.addEventListener('click', evento => filtrarVideo(evento));