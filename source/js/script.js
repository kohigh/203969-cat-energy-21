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
    console.log(e.target.value)
    imgBefore.style.display = 'block'
    imgAfter.style.display = 'block'

    imgAfter.style.width = `${e.target.value}%`
    imgBefore.style.width = imgAfter.style.left = `${100 - e.target.value}%`
  }
)

let rangeBefore = document.querySelector('#range-before')
let rangeAfter = document.querySelector('#range-after')
let rangeProgress = document.querySelector('.range__progress')

rangeBefore.addEventListener(
  'click',
  (e) => {
    imgBefore.style.display = 'block'
    imgBefore.style.width = '100%'

    imgAfter.style.display = 'none'
    imgAfter.style.left = '50%'

    rangeProgress.classList.remove('range__progress--after')
    range.value = 0
  }
)

rangeAfter.addEventListener(
  'click',
  (e) => {
    imgBefore.style.display = 'none'
    imgBefore.style.width = '50%'

    imgAfter.style.display = 'block'
    imgAfter.style.left = '0%'
    imgAfter.style.width = '100%'

    rangeProgress.classList.add('range__progress--after')
    range.value = 100
  }
)
