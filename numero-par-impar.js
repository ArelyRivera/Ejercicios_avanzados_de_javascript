/* DETECTAR LOS NÚMEROS PARES E IMPARES EN EL INTERVALO DE DOS NÚMEROS */

const numero1 = (parseInt)(prompt("Escribe el numero menor"));
const numero2 = (parseInt)(prompt("Escribe el numero mayor"));


for (i = numero1 + 1; i <= numero2; i++) {
    if (i % 2 >= 1) {
        document.write('Número impar: ' + i + '<br/>');
    }
    else if (i % 2 ==0)
    document.write('Número par: ' + i + '<br/>');

}


