// 1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// 2. Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";

// 3. Crea una variable llamada edad y asígnale el valor 25.
let edad = 25;

// 4. Establece una variable numeroDeVentas y asígnale el valor 50.
let numVentas = 50;

// 5. Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

// Mostrar los datos
alert("Tu nombre es " + nombre +
". Tienes " + edad +
" años. Tu número de ventas es " + numVentas +
". El saldo disponible es S/" + saldoDisponible
);

// 6. Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert(msjError);

// 7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let msjError = "¡Error! Completa todos los campos";

// 8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
let name = prompt("Ingrese su nombre");

// 9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let age = prompt("Ingrese su edad");

// 10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
if (age >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
} else {
    alert("Lo sentimos. Debes ser mayor de edad para obtener tu licencia de conducir");
}
