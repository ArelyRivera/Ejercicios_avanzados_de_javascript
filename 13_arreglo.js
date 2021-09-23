//ARREGLOS
//Estructura de datos


//Declaración de arreglos
const arreglo = [];
const arreglo2 = new Array();

let lenguajes = ['Javascript', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol']

/*forEach*/
/* for(let i = 0; i<lenguajes.length -1; i++) */
document.write('<ul>');
lenguajes.forEach(function (lenguaje, index) {
    document.write(`<li>${index}-${lenguaje}</li>`);
});
document.write('</ul>');

/* MAP, Crea un nuevo arreglo con los resultados */

let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function (numero) {
    return numero * 2;
});

console.log(numeros);
console.log(numeros2);

/* INCLUDES: Determina si un arreglo contiene un valor*/
console.log(lenguajes.includes('PHP'));
console.log(lenguajes.includes('Go'));

/* FILTER: Crear un nuevo arreglo con todos los elementos que cumplan con la condición */

let filtrados = numeros.filter(function (numero) {
    if (numero > 10){
        return numero;
}

});


