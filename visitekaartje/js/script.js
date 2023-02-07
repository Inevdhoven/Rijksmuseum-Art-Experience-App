// Variabelen
const h1 = document.querySelector("h1");
const linkWebsite = document.querySelector(".link")
const frontCard = document.querySelector("main div section:first-of-type")
const backCard = document.querySelector("main div section:nth-of-type(2)")
const aboutMe = document.querySelector("main div section:nth-of-type(2) p")
const image = document.querySelector("main section:first-of-type img")

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

function addData(data) {
    const name = data.member.name
    const prefix = data.member.prefix
    const surname = data.member.surname
    const website = data.member.website
    const text = data.member.bio.html
    const img = data.member.avatar

    h1.textContent = name + prefix + ' ' + surname
    linkWebsite.href = website
    aboutMe.innerHTML = text
    image.src = img

    console.log(text)
}

frontCard.addEventListener('click', function() {
    frontCard.classList.add('flip')
    backCard.classList.add('showback')
})

backCard.addEventListener('click', function() {
    frontCard.classList.remove('flip')
    backCard.classList.remove('showback')
})