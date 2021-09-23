
let num1 = parseInt(prompt("Ingresa un numero"));
let contador = 0;

for (i = 0; i <= num1; i++) {
    if (num1 % i == 0) {
        document.write('Los divisores de ' + num1 + ' son: '+ i + '<br/>' );

    }
}
