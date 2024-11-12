const html = document.querySelector('html');
const btnCorto = document.querySelector('.app__card-button--corto');
const btnEnfoque = document.querySelector('.app__card-button--enfoque');
const btnLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusic = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const botonIniciarPausar = document.querySelector('#start-pause');
const textIniciarPausa = document.querySelector('#start-pause span')
const TiempoEnPantalla = document.querySelector('#timer');

// Musicas Routes
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoSegundos = 1500;
let idIntervalo = null;

musica.loop = true;

inputEnfoqueMusic.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause();
    }
});

btnCorto.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 300;
    cambiarContexto('descanso-corto');
    btnCorto.classList.add('active');
})

btnEnfoque.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 1500;
    cambiarContexto('enfoque');
    btnEnfoque.classList.add('active');
})

btnLargo.addEventListener('click', () => {
    tiempoTranscurridoSegundos = 900;
    cambiarContexto('descanso-largo');
    btnLargo.classList.add('active');
})

function cambiarContexto(contexto) {
    mostrarTiempo();
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

const cuentaRegresiva = () => {
    if (tiempoTranscurridoSegundos <= 0) {
        audioTiempoFinalizado.play();
        alert('Tiempo Final');
        reiniciar();
        return
    }
    textIniciarPausa.innerHTML = "Pausar";
    tiempoTranscurridoSegundos -= 1;
    mostrarTiempo();
};

botonIniciarPausar.addEventListener('click', iniciarPausar);

function iniciarPausar() {
    if (idIntervalo) {
        audioPausa.play();
        reiniciar();
        return
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000);
}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
    textIniciarPausa.textContent = "Comenzar";
}

function mostrarTiempo() {
    const tiempo = new Date(tiempoTranscurridoSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-PE', { minute: '2-digit', second: '2-digit'});
    TiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

mostrarTiempo();