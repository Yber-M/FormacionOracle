let numAdivinar = 3;
let respuesta = false;

console.log("Hola Mundo"); //? Mensaje informativo
console.error("Ocurrio un error"); //? Mensaje de error
console.warn("Esto es una advertencia"); //? Mensaje de advertencia
console.info("Mensaje importante"); //? Similar que log
const usuarios = [
  { nombre: "Alice", edad: 25 },
  { nombre: "Bob", edad: 30 },
];
console.table(usuarios); //? Imprime datos en forma de tabla

while (respuesta == false) {
  let rspt = prompt("Por favor indicar un número entre el 1 y 10:");
  if (rspt == numAdivinar) {
    alert("Genial! El número " + numAdivinar + " es el correcto.");
    respuesta = true;
  } else {
    alert("Numero incorrecto");
    respuesta = false;
  }
}
