const openBtn = document.getElementById('open-cart-btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close-btn')
const backdrop = document.getElementById('backdrop')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)

function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)
}

function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 500)
}