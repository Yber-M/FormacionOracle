//Ojo -> Desafio 1
let cont1 = 0;
alert('Primer Desafio');
while (cont1 < 10) {
    cont1++;
    alert(cont1);
}

//Ojo -> Desafio 2
alert('Segundo Desafio');
let cont2 = 11;
while (cont2 > 0) {
    cont2--;
    alert(cont2);
}

//Ojo -> Desafio 3
alert('Tercer Desafio');
let numerUser = prompt('Ingrese un número mayor a 0');
let cont3 = 0;
if (numerUser > 0) {
    while (cont3 < numerUser) {
        cont3++;
        console.log(cont3);
    }
} else {
    alert('ERROR. El número debe ser mayor que 0');
}