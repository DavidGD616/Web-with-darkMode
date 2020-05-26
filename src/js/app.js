const hamburger = document.querySelector('.menu__button')
const navLinks = document.querySelector('.menu')
const links = document.querySelector('.menu__item')


hamburger.addEventListener('click',  () => {
    navLinks.classList.toggle('is-active')
})