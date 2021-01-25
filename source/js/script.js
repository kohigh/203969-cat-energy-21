let elements = document.querySelectorAll('[class*=--no-js]')

for (let el of elements) {
  el.classList.forEach(className => className.includes('--no-js') && el.classList.remove(className) )
}

let toggle = document.querySelector('.header__toggle')
let header = document.querySelector('.header')

toggle.addEventListener(
  'click',
  (e) => { header.classList.toggle('header--opened') }
)

let range = document.querySelector('.range__input')
let imgBefore = document.querySelector('.range__img--before')
let imgAfter = document.querySelector('.range__img--after')

range.addEventListener(
  'change',
  (e) => {
    imgBefore.style.width = `${e.target.value}%`
    imgAfter.style.width = `${100 - e.target.value}%`
    imgAfter.style.left = `${e.target.value}%`
  }
)
