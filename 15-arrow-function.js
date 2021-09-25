/* Funciones de flecha */

console.log(suma(37, 32));// Funciona porque es una funcion para la operacion solicitada

function suma(num1, num2) {
    return num1 + num2;

}

const suma1 = (num1, num2) => {
    return num1 + num2;
}

document.write(`<p>${suma1(5, 3)}`)