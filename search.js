// const stock = [
//     {name: 'Vela' , price: 700 , quantity: 10, smell: ["coco", "vainilla", "melón"]},
//     {name: 'Sahumo' , price: 1200 , quantity: 5, smell: ["palo santo", "copal", "lavanda"]},
//     {name: 'Aceite' , price: 2400 , quantity: 20, smell: ["sándalo", "almendras", "coco"]},
//     {name: 'Incienso' , price: 400 , quantity: 30, smell: ["sándalo", "vainilla", "copal", "mirra"]}

// ];

// const form = document.querySelector('#form');
// const divResult = document.querySelector('.results');
// const result = document.querySelector('#myUL');
// const closeResults = document.querySelector('.closeResults');
// const categories = document.querySelector('#categories');

// const filter =()=>{
//     divResult.classList.remove('results')
//     categories.classList.add('categories-margin-top')

//     result.innerHTML = '';
//     event.preventDefault()

//     const inputUser = form.value.toLowerCase();
    
//     for (let product of stock){
//         let name = product.name.toLowerCase();
//         if(name.indexOf(inputUser) !== -1){
//             result.innerHTML += `<li><a href="#">${product.name}</a></li>` 
//         }
//     }
//     if(result.innerHTML===''){
//         result.innerHTML += `<li>Producto no encontrado...</li>` 

//     }

// } 
// form.addEventListener('keyup', filter)

// const closeRes = ()=>{
//     divResult.classList.add('results')
//     categories.classList.remove('categories-margin-top')

// }

// closeResults.addEventListener('click', closeRes)

