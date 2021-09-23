// CICLO WHILE
//Nos permite repetir de codigo mientras una condicion sea verdadera

/* let num1 = parseInt(prompt('Ingrese un número'));

//NaN Significa que no es un numero

while(isNaN(num1)){
    num1 = parseInt(prompt('Ingresa un número'));

} */


/* let num1 = parseInt(prompt("Ingresa un numero"));
const num_secreto = 23;

while(num1 !== num_secreto){
    console.log('No adivinaste el número secreto, intenta de nuevo');
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt("Ingresa un numero"));
}

console.log("Felicidades, encontraste el número secreto"); */

//CICLO DO WHILE

const num1 = parseInt(prompt("Ingresa un numero"));

do {
    document.write(`<p> El número introducido es: ${num1}`);
    num1 = parseInt(prompt('Ingresa un número'));

}

while(num1 > 5);