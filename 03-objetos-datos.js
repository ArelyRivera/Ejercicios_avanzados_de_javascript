const persona = {
    nombre: 'Julian',
    apellidos: 'Sanchez Perez',
    email: 'jperez@example.com'
}

const articulos = [{
    id: 1,
    nombre: 'Alimento para perros',
    precio: 30.50
},
{
    id: 2,
    nombre: 'Alimento para gatos',
    precio: 60.25
},
{
    id: 3,
    nombre: 'Alimento para aves',
    precio: 12.55
}
]

document.write(persona.nombre + "</br>");
for (var i = 0; i < articulos.length; i++) {
    document.write(articulos[i].id + "</br>");
    document.write(articulos[i].nombre + "</br>");
    document.write(articulos[i].precio + "</br>");
}