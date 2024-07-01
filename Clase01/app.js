
// console.log("Hola Mundo"); //? Mensaje informativo
// console.error("Ocurrio un error"); //? Mensaje de error
// console.warn("Esto es una advertencia"); //? Mensaje de advertencia
// console.info("Mensaje importante"); //? Similar que log
// const usuarios = [
//   { nombre: "Alice", edad: 25 },
//   { nombre: "Bob", edad: 30 },
// ];
// console.table(usuarios); //? Imprime datos en forma de tabla
// //? Este code hara que si o si ingrese

let numAdivinar = 7;
let rspt = 0;
let numIntentos = 1;
let palabraVeces = 'vez';
while (rspt != numAdivinar) {
  rspt = prompt("Por favor indicar un número entre el 1 y 10:");
  if (rspt <= 10 && rspt >= 1) {
    if (rspt == numAdivinar) {
      alert(`Genial! El número ${rspt} es el correcto. Tu N° de intentos fue: ${numIntentos} ${palabraVeces == 1 ? 'vez' : 'veces'}`);
    } else {
      if (rspt > numAdivinar) {
        alert('El número secreto es menor')

      } else {
        alert('El número secreto es mayor')
      }
    }
  } else {
    alert('El número debe ser entre 1 y 10. Intente nuevamente');
  }
  numIntentos++;
  if (numIntentos > 3) {
    alert('Superaste el tus 3 intentos :(');
    break; // OjO -> Acá marcamos el fin del bucle
  }
}