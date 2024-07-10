//OjO -> 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function helloWorld() {
    console.log('Hola Mundo');
    return;
}

helloWorld();

//OjO -> 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let nombre = 'Marlon'
function saludaNombre(nombre) {
    console.log(`Hola, ${nombre}`);
    return;
}

saludaNombre(nombre);

//OjO -> 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let numero = 2;
function dobleNum(numero) {
    let doble = numero * 2;
    console.log(doble);
    return;
}

dobleNum(numero);

//OjO -> 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
let n1 = 20;
let n2 = 30;
let n3 = 10;

function promedio(n1, n2, n3) {
    let prom = (n1 + n2 + n3) * 3 / 3;
    console.log(prom);
    return;
}

promedio(n1, n2, n3);

//OjO -> 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let num1 = 13;
let num2 = 23;

function mayorMenor(num1, num2) {
    console.log(num1 > num2 ? num1 : num2);
    return;
}
mayorMenor(num1, num2);

//OjO -> 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
let numMultiplicar = 3;
function multiplicarXSiMismo(numMultiplicar) {
    console.log(numMultiplicar * numMultiplicar);
    return;
}

multiplicarXSiMismo(numMultiplicar);