const html = document.querySelector('html');
const btnCorto = document.querySelector('.app__card-button--corto');
const btnEnfoque = document.querySelector('.app__card-button--enfoque');
const btnLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusic = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');

musica.loop = true;

inputEnfoqueMusic.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause();
    }
});

btnCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
    btnCorto.classList.add('active');
})

btnEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
    btnEnfoque.classList.add('active');
})

btnLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo');
    btnLargo.classList.add('active');
})

function cambiarContexto(contexto) {

    botones.forEach(function (contexto) {
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
            break;
        case "descanso-corto":
            titulo.innerHTML = `¿Qué tal tomar un respiro?<br>
            <strong class="app__title-strong">¡Haz una pausa corta!.</strong>`;
            break;
        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie<br>
            <strong class="app__title-strong">¡Haz una pausa larga!.</strong>`
            break;
    }
}