// //Consulto si hay elementos guardados en el storage para mostrar la cantidad en el carrito
if (sessionStorage.getItem('cart-products')){
    document.querySelector('.nav-icon-cart-quantity').innerText = sessionStorage.getItem('cart-products')}else{
        document.querySelector('.nav-icon-cart-quantity').innerText = 0
    }