//OjO -> 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    let estado = '';
    if (imc < 18.5) {
        estado = 'Insuficiencia ponderal';
    } else if (imc >= 18.5 || imc <= 24.9) {
        estado = 'Intervalo normal';
    } else if (imc == 25) {
        estado = 'Sobrepeso';
    } else if (imc >= 25.01 || imc <= 29.9) {
        estado = 'Preobesidad';
    } else if (imc == 30) {
        estado = 'Obesidad';
    } else if (imc >= 30.01 || imc <= 34.9) {
        estado = 'Obesidad de clase I';
    } else if (imc >= 35 || imc <= 39.9) {
        estado = 'Obesidad de clase II';
    } else if (imc >= 40) {
        estado = 'Obesidad de clase III';
    }

    resultado = `Tu IMC es = ${imc} <br> Su estado es = ${estado}`;

    return resultado;
}

function mostrarValorImc() {
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    let resultado = calcularIMC(altura, peso);

    document.querySelector('#imcResultado').innerHTML = resultado;
}

//Ojo -> 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function valorFactorial(numero) {
    if (numero <= 0) {
        return "El factorial no está definido para números negativos.";
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    let resultado = `El factorial de ${numero} es = ${factorial}`;

    return resultado;
}

function monstrarResultadosFactorial() {
    let factorial = document.querySelector('#numFactorial').value;

    let resultado = valorFactorial(factorial);

    document.querySelector('#mostrarFactorial').innerHTML = resultado;

}

//OjO -> 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertDolaresSoles(dolares) {
    let valorSoles = 3.7;
    let conversion = dolares * valorSoles;

    let resultado = `La conversión de $${dolares} es igual a S/${conversion}`;

    return resultado;
}

function mostrarConversion() {
    let dolares = document.querySelector('#dolares').value;

    let resultado = convertDolaresSoles(dolares);

    document.querySelector('#conversionDolares').innerHTML = resultado;

}

//OjO -> 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaPerimetroRectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = (2 * altura) + (2 * anchura);

    let templateString = `Rectangulo con ${altura} de altura y ${anchura} de ancho <br> Área = ${area}cm² <br> Perímetro = ${perimetro}cm`;

    return templateString;

}

function calcularBtnRectangular() {
    let largo = document.querySelector('#largo').value;
    let ancho = document.querySelector('#ancho').value;

    let resultado = calcularAreaPerimetroRectangular(largo, ancho);

    document.querySelector('#resultadoRectangular').innerHTML = resultado;
}

//OjO -> 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaPerimetroCirucular(radio) {
    let pi = 3.14;
    let area = pi * (radio * radio);
    let perimetro = 2 * (pi * radio);

    let templateString = `Circulo con ${radio}cm de radio <br> Área = ${area}cm² <br> Perímetro = ${perimetro}cm`;

    return templateString;
}

function calcularBtnCircular() {
    let radio = document.querySelector('#radio').value;

    let resultado = calcularAreaPerimetroCirucular(radio);

    document.querySelector('#resultadoCircular').innerHTML = resultado;
}

//OjO -> 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMulti(num) {
    let tabla = '';
    for (let i = 0; i <= 13; i++) {
        tabla += `${num} x ${i} = ${num * i}<br>`;
    }
    return tabla;
}

function btnMostrarTabla() {
    let numero = document.querySelector('#numIngresado').value;
    document.querySelector('#tituloTabla').textContent = `Tabla del número ${numero}`;
    let tabla = tablaMulti(numero);
    document.querySelector('#tablaResult').innerHTML = tabla;
    document.querySelector('#numIngresado').value = '';
}
