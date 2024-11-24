async function listaVideo() {
    const conexion = await fetch('http://localhost:3001/videos');

    const conexionConvert = conexion.json();

    return conexionConvert;
}

async function crearVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: { 'Content=type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            url: url,
            imagen: imagen
        })
    });
    const conexionConvert = conexion.json();

    return conexionConvert;
}

export const conexApi = {
    listaVideo, crearVideo
}

listaVideo();