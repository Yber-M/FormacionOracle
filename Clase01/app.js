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
//? Este code hara que si o si ingrese
while (respuesta == false) {
  let rspt = prompt("Por favor indicar un número entre el 1 y 10:");
  if (rspt <= 10 && rspt >= 1) {
    if (rspt == numAdivinar) {
      //OjO: Al usar tilde invertida podemos ingresar directamente la variable
      alert(`Genial! El número ${rspt} es el correcto.`);
      respuesta = true;
    } else {
      alert("Numero incorrecto");
      respuesta = false;
    }
  } else {
    alert('El número debe ser entre 1 y 10. Intente nuevamente');
  }
}
