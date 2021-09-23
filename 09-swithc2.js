const nombre = parseInt(prompt("Ingresa tu nombre"));
let mensaje = ''

switch (nombre.tolowerCase()) {
    case "Emma":
        mensaje = "Eres administradora";
        break;
    case "Juan":
        mensaje = "Eres usuario";
        break;
    default:
        mensaje = "No tienes permiso para acceder al sistema"
        break;
}
document.write(`<p>${mensaje}</p>`)