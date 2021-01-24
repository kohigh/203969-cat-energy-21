let elements = document.querySelectorAll('[class*=--no-js]')

for (let el of elements) {
  el.classList.forEach(className => className.includes('--no-js') && el.classList.remove(className) )
}

let toggle = document.querySelector('#menu-toggle')
let header = document.querySelector('#header')

toggle.addEventListener(
  'click',
  (e) => { header.classList.toggle('header--opened') }
)
