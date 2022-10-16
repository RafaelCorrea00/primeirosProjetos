const body = document.querySelector("body")
const container = document.querySelector("div.container")
const btn = document.querySelector("button")
const title = document.querySelector("h1")

let toggle = true

btn.addEventListener("click", () => {
    if (toggle) {
        darkMode()
        toggle = false
    } else {
        if (!toggle) {
            lightMode()
            toggle = true
        }
    }
})

function lightMode() {
    btn.style.backgroundImage = "url('./assets/sun_icon.png')"
    btn.style.backgroundColor = "#f0ad4e"
    body.style.backgroundColor = "#f7f7f7"
    body.style.color = "#292b2c"
    container.style.border = "1px solid #292b2c"
    title.style.color = "#0275d8"
}

function darkMode() {
    btn.style.backgroundImage = "url('./assets/moon_icon.png')"
    btn.style.backgroundColor = "#5bc0de"
    body.style.backgroundColor = "#292b2c"
    body.style.color = "#f7f7f7"
    container.style.border = "1px solid #f7f7f7"
    title.style.color = "#fff3cd"
}