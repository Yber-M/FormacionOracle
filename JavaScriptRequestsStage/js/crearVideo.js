import { conexApi } from "./conexApi.js";

const formulario = document.querySelector('[data-formulario]');

async function crearVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('[data-titulo]');
    const url = document.querySelector('[data-url]');
    const imagen = document.querySelector('[data-imagen]');

    const descripcion = Math.floor(Math.random * 10).toString;

    conexApi.enviarVideo(titulo, descripcion, url, imagen);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener('submit', evento => crearVideo(evento));