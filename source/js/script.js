let elements = document.querySelectorAll("[class*=--no-js]")

for (let el of elements) {
  el.classList.forEach(className => className.includes("--no-js") && el.classList.remove(className) )
}

let toggle = document.querySelector(".header__toggle")
let header = document.querySelector(".header")

toggle.addEventListener(
  "click",
  () => { header.classList.toggle("header--opened") }
)

function validateInput(input, msg) {
  if (!input.value) {
    input.setCustomValidity(msg)
  } else {
    input.setCustomValidity("")
  }
}

const form = document.querySelector(".form")
const submitButton = document.querySelector(".form__submit")
const nameInput = document.querySelector("#name")
const weightInput = document.querySelector("#weight")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")

if (submitButton) {
  submitButton.addEventListener(
    "click",
    () => {
      validateInput(nameInput, "Накарябай имя, пжлст!")
      validateInput(weightInput, "Укажи жирообразность котика!")
      validateInput(emailInput, "А тут емэйлик с собачкой(@), гав гав!")
      validateInput(phoneInput, "Ну и цифры свои скинь!")

      if (form.checkValidity()) {
        form.classList.remove("form__error")
      } else {
        form.classList.add("form__error")
      }
    }
  )
}
