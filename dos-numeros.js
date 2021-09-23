
/* Al introducir dos números, verificar si el primero es mayor que el segundo y de ser así obtener su suma y resta; en caso contrario obtener su multiplicacion y división */

const numero1 = (parseInt)(prompt("Escribe el numero menor"));
const numero2 = (parseInt)(prompt("Escribe el numero mayor"));


if (numero1 > numero2) {
        document.write(`La suma es: ${numero1 + numero2}`);
        document.write(`La resta es: ${numero1 - numero2}`);
    }
    else if (numero1 < numero2)
    document.write(`La multiplicación es: ${numero1 * numero2}`);
    document.write(`La divisón es: ${numero1/numero2}`);

