let num1 = parseInt(prompt("Ingresa un numero"));
let suma = 0;
let contador = 0;

while (num1 >= 0) {
    suma = suma + num1;
    contador++;
    num1 = parseInt(prompt("Ingresa un numero"));
}

document.write(`<p> La suma es: ${suma}`)
document.write(`<p> El promedio es: ${suma/contador}`)


