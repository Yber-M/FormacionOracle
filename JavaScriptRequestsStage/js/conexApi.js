async function listaVideo() {
    const conexion = await fetch('http://localhost:3001/videos');

    const conexionConvert = conexion.json();

    return conexionConvert;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });
    const conexionConvert = conexion.json();

    return conexionConvert;
}

export const conexApi = {
    listaVideo, enviarVideo
}

listaVideo();