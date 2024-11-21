const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=20"

function listarImg() {
    fetch(url)
        .then(Response => Response.json())
        .then(datosImg => {
            console.log(datosImg);
        })
        .catch()
}

listarImg();