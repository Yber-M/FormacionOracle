const url = "https://api.nasa.gov/planetary/apod?api_key=ryasrRo4FiO9ju0cz3dLZTpS9Kq2VV8viPFYvLuQ&count=50"

async function listarImagenes() {
    try {
        let fetcImg = await fetch(url);
        let dataImg = await fetcImg.json();

        const card = document.querySelector('[data-ul]');
        const banner = document.querySelector('.banner');

        const bannerContent = `<img class="banner__image" src="${dataImg[0].url}" alt="bla">`
        banner.innerHTML = banner.innerHTML + bannerContent;


        dataImg.forEach(element => {
            const contenido = `<li class="card">
                            <img class="card__image" src="${element.url}" alt="imagen">
                            <h3 class="card__title">${element.title}</h3>
                            </li>`

            card.innerHTML = card.innerHTML + contenido;
        });

    } catch (error) {
        console.log(error);
    }
}
listarImagenes();