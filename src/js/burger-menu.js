document.addEventListener('DOMContentLoaded', ()=> {
  const wrapperBurger = document.querySelector('.header__burger-menu')
  const menuBurger = wrapperBurger.querySelector('.burger-menu')
  const burgerButton = wrapperBurger.querySelector('.burger-menu__button');


  burgerButton?.addEventListener('click', () => {
    menuBurger?.classList.toggle('burger-menu--open')
    burgerButton?.classList.toggle('.menu-button--open')
  })
})
