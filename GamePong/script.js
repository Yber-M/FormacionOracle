// Variables para el juego
let anchoCanvas = 800;
let altoCanvas = 400;
let xPelota, yPelota; 
let velocidadXPelota = 3; // Velocidad inicial más baja
let velocidadYPelota = 3; // Velocidad inicial más baja
let incrementoVelocidad = 0.3; // Incremento de velocidad en cada colisión (reducido para evitar problemas)
let diametroPelota = 30;
let juegoPausado = true; // Inicia en pausa con mensaje de inicio
let velocidadMaximaPelota = 8; // Velocidad máxima que la pelota puede alcanzar (ajustada)

// Variables para las raquetas
let anchoRaqueta = 15;
let altoRaqueta = 150;

// Raqueta del jugador
let xJugador = 30;
let yJugador;
let raquetaJugadorVelocidad = 10; // Aumentar la velocidad del jugador

// Raqueta de la computadora
let xComputadora;
let yComputadora;
let velocidadComputadora = 4;
let velocidadMaximaComputadora = 10; // Velocidad máxima que la raqueta del adversario puede alcanzar
let incrementoVelocidadRaqueta = 1; // Incremento de velocidad para la raqueta del adversario

// Puntuaciones
let puntosJugador = 0;
let puntosComputadora = 0;

function setup() {
  createCanvas(anchoCanvas, altoCanvas);
  reiniciarJuego(); // Inicializar posiciones
  
  // Detectar eventos de teclado
  window.addEventListener("keydown", moverRaquetaJugadorKeyDown);
  window.addEventListener("keyup", moverRaquetaJugadorKeyUp);
  window.addEventListener("keydown", iniciarConEspacio); // Detectar la tecla de espacio
}

function draw() {
  background(0);
  mostrarPuntuacion();

  // Mostrar mensaje de inicio si el juego está pausado
  if (juegoPausado) {
    mostrarMensajeInicio();
    return;
  }

  // Mostrar y mover la pelota
  dibujarPelota();
  moverPelota();
  verificarColisionPared();

  // Mostrar raquetas
  dibujarRaqueta(xJugador, yJugador);
  dibujarRaqueta(xComputadora, yComputadora);

  // Mover la raqueta del jugador y evitar que salga del canvas
  moverRaquetaJugador();
  
  // Control automático de la raqueta de la computadora
  moverRaquetaComputadora();
  
  // Verificar colisiones con las raquetas
  verificarColisionRaqueta(xJugador, yJugador);
  verificarColisionRaqueta(xComputadora, yComputadora);
}

function dibujarPelota() {
  fill(255);
  circle(xPelota, yPelota, diametroPelota);
}

function moverPelota() {
  xPelota += velocidadXPelota;
  yPelota += velocidadYPelota;
}

function verificarColisionPared() {
  if (yPelota - diametroPelota / 2 < 0 || yPelota + diametroPelota / 2 > height) {
    velocidadYPelota *= -1;
  }
  
  if (xPelota - diametroPelota / 2 < 0) {
    puntosComputadora++;
    pausarJuego("computadora");
  } else if (xPelota + diametroPelota / 2 > width) {
    puntosJugador++;
    pausarJuego("jugador");
  }
}

function dibujarRaqueta(x, y) {
  fill(255);
  rect(x, y, anchoRaqueta, altoRaqueta);
}

function moverRaquetaJugador() {
  yJugador += raquetaJugadorVelocidad;

  // Evitar que la raqueta salga del borde superior
  if (yJugador < 0) {
    yJugador = 0;
  }

  // Evitar que la raqueta salga del borde inferior
  if (yJugador + altoRaqueta > height) {
    yJugador = height - altoRaqueta;
  }
}

function moverRaquetaJugadorKeyDown(event) {
  // Detecta si se presionan las teclas de flecha
  if (event.key === "ArrowUp") {
    raquetaJugadorVelocidad = -10; // Mover hacia arriba con más velocidad
  } else if (event.key === "ArrowDown") {
    raquetaJugadorVelocidad = 10; // Mover hacia abajo con más velocidad
  }
}

function moverRaquetaJugadorKeyUp(event) {
  // Detiene el movimiento cuando se sueltan las teclas
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    raquetaJugadorVelocidad = 0; // Detener el movimiento
  }
}

function moverRaquetaComputadora() {
  if (yPelota < yComputadora) {
    yComputadora -= velocidadComputadora;
  } else if (yPelota > yComputadora + altoRaqueta) {
    yComputadora += velocidadComputadora;
  }
  
  // Evitar que la raqueta salga del borde superior o inferior
  if (yComputadora < 0) {
    yComputadora = 0;
  }
  if (yComputadora + altoRaqueta > height) {
    yComputadora = height - altoRaqueta;
  }
}

function verificarColisionRaqueta(x, y) {
  // Calcular los bordes de la pelota
  let izquierdaPelota = xPelota - diametroPelota / 2;
  let derechaPelota = xPelota + diametroPelota / 2;
  let arribaPelota = yPelota - diametroPelota / 2;
  let abajoPelota = yPelota + diametroPelota / 2;

  // Calcular los bordes de la raqueta
  let izquierdaRaqueta = x;
  let derechaRaqueta = x + anchoRaqueta;
  let arribaRaqueta = y;
  let abajoRaqueta = y + altoRaqueta;

  // Verificar si la pelota está colisionando con la raqueta
  if (
    derechaPelota > izquierdaRaqueta &&
    izquierdaPelota < derechaRaqueta &&
    abajoPelota > arribaRaqueta &&
    arribaPelota < abajoRaqueta
  ) {
    // Cambia la dirección horizontal
    velocidadXPelota *= -1;

    // Aumentar la velocidad de la pelota, pero con límite
    velocidadXPelota += (velocidadXPelota > 0 ? incrementoVelocidad : -incrementoVelocidad);
    velocidadYPelota += (velocidadYPelota > 0 ? incrementoVelocidad : -incrementoVelocidad);

    // Limitar la velocidad máxima de la pelota
    velocidadXPelota = constrain(velocidadXPelota, -velocidadMaximaPelota, velocidadMaximaPelota);
    velocidadYPelota = constrain(velocidadYPelota, -velocidadMaximaPelota, velocidadMaximaPelota);

    // Incrementar la velocidad de la raqueta del adversario, pero con límite
    velocidadComputadora += incrementoVelocidadRaqueta;
    velocidadComputadora = min(velocidadComputadora, velocidadMaximaComputadora);
  }
}

function pausarJuego(puntoDe) {
  juegoPausado = true;

  // Reiniciar posiciones de las raquetas y pelota
  yJugador = height / 2 - altoRaqueta / 2;
  yComputadora = height / 2 - altoRaqueta / 2;

  if (puntoDe === "jugador") {
    xPelota = xJugador + anchoRaqueta + diametroPelota / 2;
    velocidadXPelota = 3; // Reinicia con velocidad inicial
  } else {
    xPelota = xComputadora - diametroPelota / 2;
    velocidadXPelota = -3; // Reinicia con velocidad inicial
  }
  velocidadYPelota = 3; // Velocidad inicial vertical
  yPelota = height / 2; // Colocar la pelota en el centro

  // Reiniciar la velocidad de la raqueta de la computadora
  velocidadComputadora = 4;
}

function iniciarConEspacio(event) {
  // Detecta si se presiona la barra espaciadora para reanudar el juego
  if (event.code === "Space" && juegoPausado) {
    juegoPausado = false;
  }
}

function mostrarPuntuacion() {
  fill(255);
  textSize(32);
  textAlign(CENTER, TOP);
  text(puntosJugador, width * 0.25, 20);
  text(puntosComputadora, width * 0.75, 20);
}

function mostrarMensajeInicio() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("PRESIONA ESPACIO PARA EMPEZAR", width / 2, height / 2 + 50);
}

function reiniciarJuego() {
  xPelota = xJugador + anchoRaqueta + diametroPelota / 2;
  yPelota = height / 2;
  yJugador = height / 2 - altoRaqueta / 2;
  xComputadora = width - anchoRaqueta - 30;
  yComputadora = height / 2 - altoRaqueta / 2;
}
