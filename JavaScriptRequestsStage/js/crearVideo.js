import { conexApi } from "./conexApi.js";

const formulario = document.querySelector('[data-formulario]');

async function crearVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagen = document.querySelector('[data-img]').value;

    const visualizaciones = Math.floor(Math.random() * 100 + 1).toString();

    console.log(visualizaciones);

    const descripcion = `${visualizaciones} mil visualizaciones`;

    conexApi.enviarVideo(titulo, descripcion, url, imagen);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener('submit', evento => crearVideo(evento));