async function listaVideo() {
    const conexion = await fetch('http://localhost:3001/videos');

    const conexionConvert = conexion.json();

    return conexionConvert;    
}

export const conexApi = {
    listaVideo
}

listaVideo();