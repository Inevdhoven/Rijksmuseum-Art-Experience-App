// Variabels
const front = document.querySelector("main section:nth-of-type(2) img:first-of-type")
const back = document.querySelector("main section:nth-of-type(2) iframe")

const cardCasper = document.querySelector("button.casper")
const cardIne = document.querySelector("button.ine")
const cardJeffrey = document.querySelector("button.jeffrey")
const cardHilal = document.querySelector("button.hilal")

const button = document.querySelector("main section:nth-of-type(2) div:first-of-type button")

// Logica
fetchData()

// Functions
function fetchData() {
    const urlAPI = 'https://whois.fdnd.nl/api/v1/member?id=cldepfro33xcr0av00dc0o9jx'

    const data = fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
        addData(data)
    })
}


front.addEventListener("click", function() {
    front.classList.add('flip')
    back.classList.add('back')
})

back.addEventListener("click", function() {
    front.classList.remove('flip')
    back.classList.remove('back')
})

cardCasper.addEventListener("click", function() {
    back.src = "../img/ine7.jpg"
    front.classList.add('flip')
    back.classList.add('back')
})

cardIne.addEventListener("click", function() {
    back.src = "https://inevdhoven.github.io/web-app-from-scratch-2223/visitekaartje/"
    front.classList.add('flip')
    back.classList.add('back')
})

cardJeffrey.addEventListener("click", function() {
    back.src = "https://gekkeboyjeff.github.io/web-app-from-scratch-2223/visitekaartje/"
    front.classList.add('flip')
    back.classList.add('back')
})

cardHilal.addEventListener("click", function() {
    back.src = "https://hilal-tapan.github.io/web-app-from-scratch-2223/visitekaartje/"
    front.classList.add('flip')
    back.classList.add('back')
})

button.addEventListener("click", function() {
    front.classList.toggle('flip')
    back.classList.toggle('back')
})