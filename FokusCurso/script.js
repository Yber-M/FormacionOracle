const html = document.querySelector('html');
const btnCorto = document.querySelector('.app__card-button--corto');
const btnEnfoque = document.querySelector('.app__card-button--enfoque');

btnCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-corto');
})

btnEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'enfoque');
})