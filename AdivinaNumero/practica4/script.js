// 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Marlon"
// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
let msg = `¡Hola, ${nombre}!`;
console.log(msg);

// 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(msg);

// 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
pregunta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(pregunta);

// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 2;
let valor2 = 8;
let resultadoSuma = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}`);

// 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let resultadoResta = valor1 - valor2;
console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultadoResta}`);

// 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt('Ingrese su edad:');

if (edad >= 18) {
    console.log('Usted es mayor de edad');
} else if (edad >= 1) {
    console.log('Usted es menor de edad');
} else {
    console.log('Edad inválida');
}
//8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let num = prompt('Ingrese un número');

if (num > 0) {
    alert(`El número ${num} es POSITIVO`);

} else if (num < 0) {
    alert(`El número ${num} es NEGATIVO`);
}
else if (num == 0) {
    alert(`El número ${num} es NEUTRO`);

} else {
    alert(`El valor '${num}' no es un número`);
}

//9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let = numerosDelUnoAlDiez = 0;
while (numerosDelUnoAlDiez < 10) {
    numerosDelUnoAlDiez++;
    console.log(`[${numerosDelUnoAlDiez}]`);
}

//10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 11;
if (nota > 10) {
    console.log(`APROBADO. Con ${nota}`);
} else {
    console.log(`REPROBADO. Sacaste ${nota} :(`);
}

//11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numAleatorio = Math.random();
console.log(`El número aleatorio es -> [${numAleatorio}]`);

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numAletorioUnoDiez = Math.floor(Math.random() * 10) + 1;
console.log(`El número aleatorio entre 1 y 10 es -> [${numAletorioUnoDiez}]`);

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numAletorioUnoCien = Math.floor(Math.random() * 100) + 1;
console.log(`El número aleatorio entre 1 y 100 es -> [${numAletorioUnoCien}]`);