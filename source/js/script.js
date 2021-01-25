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

let rangeMin = document.querySelector('#range__min')
let rangeMax = document.querySelector('#range__max')
let rangeBefore = document.querySelector('#range-before')
let rangeAfter = document.querySelector('#range-after')

rangeMax.addEventListener(
  'click',
  () => {
    rangeBefore.style.display = 'none';
    rangeAfter.style.display = 'block';
  }
)

rangeMin.addEventListener(
  'click',
  () => {
    rangeBefore.style.display = 'block';
    rangeAfter.style.display = 'none';
  }
)
