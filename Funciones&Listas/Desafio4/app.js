
// 1. Crea una lista vacía llamada 'tlistaGenerica".
// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los
let listaGenerica = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.siguientes elementos: 'JavaScript', 'C', 'CH', 'Kotlin' y 'Python'.
listaGenerica.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguageProgramacion() {
    console.log(`Lista de Lenguajes de Programación:\n${listaGenerica}`);
}

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarListaInver() {
    listaGenerica.reverse();
    console.log(`Lista Inversa:\n${listaGenerica}`);
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNum = [10, 20, 2, 40, 50, 230];

function calcularPromeList() {
    let total = 0;
    let prom = 0;
    let totalList = listaNum.length;
    // console.log(`Total de numeros = ${totalList}`);
    for (let index = 0; index < listaNum.length; index++) {
        let sum = listaNum[index];
        // console.log(`Recorriendo toda la lista = ${sum}`);
        total += sum;
    }
    prom = total / totalList;
    // console.log(`Total = ${total}`);
    console.log(`El promedio es = ${prom}`);
}

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumMayorMenor() {
    let numMayor = -Infinity;
    let numMenor = Infinity;
    for (let index = 0; index < listaNum.length; index++) {
        let numeros = listaNum[index];
        // console.log(numeros);
        if (numeros > numMayor) {
            numMayor = numeros;
        }
        if (numeros < numMenor) {
            numMenor = numeros;
        }
    }
    console.log(listaNum);
    console.log(`Número Mayor = ${numMayor}`);
    console.log(`Número Menor = ${numMenor}`);
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function devolverSumAllElements() {
    let total = 0;

    for (let index = 0; index < listaNum.length; index++) {
        let numeros = listaNum[index];

        total += numeros;
    }

    console.log(`La suma de todos los números = ${total}`);
}

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function devolverPosicion(num) {
    let posicion = listaNum.indexOf(num);

    if (posicion !== -1) {
        console.log(`El elemento ${num} se encuentra en la posición [${posicion}]`);
    } else {
        console.log(`El elemento ${num} no se encuentra en la lista. [${posicion}]`);
    }
}
// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva
// lista con la suma de los elementos uno a uno.
// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de
// cada número.
function mostrarFunciones() {
    mostrarLenguageProgramacion();
    mostrarListaInver();
    calcularPromeList();
    mostrarNumMayorMenor();
    devolverSumAllElements();
    devolverPosicion(50)
}

mostrarFunciones();