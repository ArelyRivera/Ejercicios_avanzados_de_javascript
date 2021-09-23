const numero1 = (parseInt)(prompt("Escribe el numero menor"));
const numero2 = (parseInt)(prompt("Escribe el numero mayor"));


for (i = numero1 + 1; i <= numero2; i++) {
    if (i % 2 >= 1) {
        document.write('Número impar: ' + i + '<br/>');
    }
    else if (i % 2 ==0)
    document.write('Número par: ' + i + '<br/>');

}



/* const numero1 = (parseInt)(prompt("Escribe un número"));
const numero2 = (parseInt)(prompt("Escribe un número"));

if ((numero1 % 2 == 0)) {
    
} else {
    document.write('Impares detectados: ' + numero1 + '')
}

if ((numero2 % 2 == 0)){

}else{
    document.write('Impares detectados: ' + numero2 + '')

}
 */





/*const numero = (parseInt)(prompt("Escribe un número"));

if (numero % 2 == 0) {
    document.write('Tu numero es par')
} else {
    document.write('Tu numero es impar')

}*/

