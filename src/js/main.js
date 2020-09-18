const btn = document.querySelector(`.btn`)
document.querySelectorAll(`.tabs-triggers__item`).forEach((item) => item.addEventListener(`click`, function (evt) {
    evt.preventDefault()
    const id = evt.target.getAttribute(`href`).replace(`#`, ``)
    document.querySelectorAll(`.tabs-triggers__item`).forEach((child) =>
        child.classList.remove(`tabs-triggers__item--active`))
    document.querySelectorAll(`.tabs-content__item`).forEach((child) =>
        child.classList.remove(`tabs-content__item--active`))

    item.classList.add(`tabs-triggers__item--active`)
    document.getElementById(id).classList.add(`tabs-content__item--active`)

    if (id === `tab-1`) {
        document.querySelector(`.tabs`).classList.remove(`tabs__signUp`)
        document.querySelector(`.tabs`).classList.add(`tabs__signIn`)
    } else {
        document.querySelector(`.tabs`).classList.remove(`tabs__signIn`)
        document.querySelector(`.tabs`).classList.add(`tabs__signUp`)
    }
})
)

document.querySelector(`.tabs-triggers__item`).click()

btn.addEventListener(`click`, () => {
    document.querySelector(`.tabs`).classList.remove(`hidden`)
})

$(document).ready(function () {
    $(`.mask-phone`).mask(`9 (999) 999-99-99`)
    $(`.mask-date`).mask(`99.99.9999`)
    $(`.mask-snils`).mask(`999-999-999 99`)
    $(`.mask-email`).inputmask(`email`)
})
