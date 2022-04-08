const cards = document.getElementById('productsContainer');
const items = document.getElementById('items');
const footer = document.getElementById('the-footer');
const template = document.querySelector('#productsTemplate').content;
const templateFooter = document.getElementById('template-footer').content;
const templateCarrito = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();

let carrito ={}



document.addEventListener("DOMContentLoaded", ()=>{
      fetchData()
    })
cards.addEventListener('click', e =>{
    addCarrito(e)
})
items.addEventListener('click', e =>{
    btnAccion(e)
})
 

const fetchData = async() =>{
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        paintCards(data) 
    }catch(error){
        console.log(error)
    }
}
//Pinto los pruductos

const paintCards = data => {
    data.forEach(product => {
        template.querySelector('h5').textContent = product.name;
        template.querySelector('img').src = product.image;
        template.querySelector('p span').textContent = product.price;
        template.querySelector('button').dataset.id = product.id;

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
} 
// Agregar al carrito

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn'))
    if(e.target.classList.contains('btn')){
       setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = objeto => {
console.log(objeto)
const producto = {
    id: objeto.querySelector('.btn').dataset.id,
    image: objeto.querySelector('img.card-img-top').src,
    title: objeto.querySelector('.card-title').textContent,
    price: objeto.querySelector('.card-text').textContent,
    quantity: 1
}
console.log(producto);

if (carrito.hasOwnProperty(producto.id)){
    producto.quantity = carrito[producto.id].quantity + 1
}

carrito[producto.id] = {...producto}
console.log(carrito)
pintarCarrito();
}

const pintarCarrito = () =>{
    console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('img').src = producto.image,
        templateCarrito.querySelector('th').textContent = producto.id,
        templateCarrito.querySelectorAll ('td')[0].textContent = producto.title,
        templateCarrito.querySelectorAll ('td')[1].textContent = producto.quantity,
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id,
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id,
        templateCarrito.querySelector('span').textContent = parseFloat(producto.price) * parseFloat(producto.quantity)

     

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
        items.appendChild(fragment)

        pintarFooter()
}

const pintarFooter = () =>{
    footer.innerHTML = ''
    if(Object.keys(carrito).length===0){
        footer.innerHTML=`
        <th scope="row" colspan="5" style="text-align: center; font-weight: 400; font-size: 13px; letter-spacing: 2px;
        ">TU CARRITO ESTA VACÍO</th>
`
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, { quantity })=> acc + quantity, 0)
    document.querySelector('.nav-icon-cart-quantity').innerText = nCantidad

    const nPrecio =  Object.values(carrito).reduce((acc, { quantity, price })=> acc + quantity * price, 0)
    //console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)


    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', ()=>{
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e =>{
    // console.log(e.target)
    //Accion de aumentar
    if(e.target.classList.contains('btn-info')){
        //carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        console.log(carrito[e.target.dataset.id])
        producto.quantity++
        carrito[e.target.dataset.id] = { ...producto }

        pintarCarrito()
        
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.quantity --
        pintarCarrito()

        if(producto.quantity===0){
            delete carrito[e.target.dataset.id]
            pintarCarrito()

        } 
    }
    e.stopPropagation()

}


