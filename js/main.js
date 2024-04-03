const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')

nav.onclick = () => {
  navIcon.classList.toggle('nav-icon--active')
  nav.classList.toggle('header__top-row_mobile')
  document.body.classList.toggle('no-scroll')
}