//OjO -> Desafio 3: Sistema de puntuacion
let estado3 = false;
function calcularPuntos(puntuacion1, puntuacion2) {
    let totalPuntuacion = 0;
    totalPuntuacion = puntuacion1 + puntuacion2;

    if (totalPuntuacion >= 100) {
        alert(`¡Felicidades, has ganado!\n
        ${totalPuntuacion}/100`);
        estado3 = true;
    } else {
        estado3 = false;
        alert(`Intentalo nuevamente para ganar.
        \nTuviste errores. ${totalPuntuacion}/100`);
    }

}
//OjO -> Desafio 1:
// Funcion para normalizar la respuesta que de el usuaurio
function normalizar(respuesta) {
    // toLowerCase para convertir la cenada en minuscula
    // el normalize para descomponer los caracteres acentuados en basicos
    // replace eliminar los caracateres de acento
    return respuesta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//OjO -> Desafio 1
while (estado3 == false) {
    let estado = false;
    //OjO -> Desafio 3: Sistema de puntuacion
    let puntuacionDsf1 = 50;
    //! FIN Desafio 3
    while (estado == false) {
        let rspt = normalizar(prompt("DESAFIO 1: \n¿Qué día de la semana es?"));
        switch (rspt) {
            case "lunes":
                alert("Buen inicio de semana");
                estado = true;
                break;
            case "martes":
                alert("Feliz martes");
                estado = true;
                break;
            case "miercoles":
                alert("Mitad de semana");
                estado = true;
                break;
            case "jueves":
                alert("Casi viernes");
                estado = true;
                break;
            case "viernes":
                alert("¡Es viernes!");
                estado = true;
                break;
            case "sabado":
                alert("Disfruta tu sábado");
                estado = true;
                break;
            case "domingo":
                alert("Que tengas un buen domingo");
                estado = true;
                break;
            default:
                //OjO -> Desafio 3: Sistema de puntuacion
                if (puntuacionDsf1 > 0) {
                    puntuacionDsf1 -= 10
                    console.log(puntuacionDsf1);
                } else {
                    console.log(puntuacionDsf1);
                }
                //! FIN Desafio 3:

                estado = false;
                alert("ERROR. Intente nuevamente [-10 puntos]");
                break;
        }
    }

    //OjO -> Desafio 2:
    let estado2 = false;

    //OjO -> Desafio 3: Sistema de puntuacion
    let puntuacionDsf2 = 50;
    //! FIN Desafio 3

    while (estado2 == false) {
        let numUser = prompt('DESAFIO 2:\nIngrese un número para determinar si es positivo o negativo');
        if (numUser > 0) {
            alert(`El número ${numUser} es POSITIVO.`);
            estado2 = true;
        } else if (numUser < 0) {
            alert(`El número ${numUser} es NEGATIVO.`);
            estado2 = true;
        } else if (numUser == 0) {
            alert(`El número ${numUser} es NEUTRO.`);
            estado2 = true;
        } else {

            //OjO -> Desafio 3: Sistema de puntuacion
            if (puntuacionDsf2 > 0) {
                puntuacionDsf2 -= 10
                console.log(puntuacionDsf2);
            } else {
                console.log(puntuacionDsf2);
            }
            //! FIN Desafio 3:

            estado2 = false;
            alert(`ERROR. "${numUser}" no es un número. Intente nuevamente [-10 puntos]`);
        }
    }

    //OjO -> Desafio 4:
    let saldoCuenta = 5900;
    alert(`El valor de su saldo es: S/${saldoCuenta}`);

    //OjO -> Desafio 5:
    let nombre = prompt('Ingrese su nombre');
    alert(`Bienvenido al desafio ${nombre}`);

    //OjO -> Desafio 3: Sistema de puntuacion
    calcularPuntos(puntuacionDsf1, puntuacionDsf2);

}