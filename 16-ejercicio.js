const $btnperritu = document.querySelector('#btnperritu');
const $dogsContainer = document.querySelector('#dogsContainer');

$btnperritu.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data =>{
        console.log(data);
        const imgDog = document.createElement('img');
        imgDog.src = data.message;
        
          $dogsContainer.appendChild(imgDog); 
         
    });

});