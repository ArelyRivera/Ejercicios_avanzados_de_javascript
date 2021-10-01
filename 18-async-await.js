// La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.//

const $btnGatetos = document.querySelector('#gatetos');
$btnGatetos.addEventListener('click',async()=>{
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();
    let newImage=document.createElement('img');
        newImage.src=data[0].url;
        newImage.width='300';
        document.body.appendChild(newImage);
});

// fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json()).then(data =>{
//         let newImage=document.createElement('img');
//         newImage.src=data[0].url;
//         document.body.appendChild(newImage);
//     }).catch(err => console.log(err));