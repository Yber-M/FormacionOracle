// Variables para el juego
let anchoCanvas = 1000;
let altoCanvas = 500;
let xPelota, yPelota; 
let velocidadXPelota = 3; // Velocidad inicial más baja
let velocidadYPelota = 3; // Velocidad inicial más baja
let incrementoVelocidad = 1; // Incremento de velocidad en cada colisión
let diametroPelota = 20;
let juegoPausado = true; // Inicia en pausa con mensaje de inicio
let velocidadMaximaPelota = 10; // Velocidad máxima que la pelota puede alcanzar

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
let velocidadComputadora = 3;
let velocidadMaximaComputadora = 8; // Velocidad máxima que la raqueta del adversario puede alcanzar
let incrementoVelocidadRaqueta = 0.5; // Incremento de velocidad para la raqueta del adversario

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
  if (yPelota < 0 || yPelota > height) {
    velocidadYPelota *= -1;
  }
  
  if (xPelota < 0) {
    puntosComputadora++;
    pausarJuego("computadora");
  } else if (xPelota > width) {
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
    raquetaJugadorVelocidad = -7; // Mover hacia arriba con más velocidad
  } else if (event.key === "ArrowDown") {
    raquetaJugadorVelocidad = 7; // Mover hacia abajo con más velocidad
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
}

function verificarColisionRaqueta(x, y) {
  if (xPelota > x && xPelota < x + anchoRaqueta && 
      yPelota > y && yPelota < y + altoRaqueta) {
    velocidadXPelota *= -1; // Cambia la dirección horizontal

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
  yPelota = yJugador + altoRaqueta / 2; // Alineada con el jugador

  // Reiniciar la velocidad de la raqueta de la computadora
  velocidadComputadora = 3;
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
