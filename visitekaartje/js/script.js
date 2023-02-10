// Variabelen
const h1 = document.querySelector("h1");
const linkWebsite = document.querySelector(".link")
const github = document.querySelector(".github")
const frontCard = document.querySelector("main div section:first-of-type")
const front = document.querySelector("main div section.front")
const backCard = document.querySelector("main div section:nth-of-type(2)")
const aboutMe = document.querySelector("main div section:nth-of-type(2) p")
const image = document.querySelector("main section:first-of-type img")
const button = document.querySelector("header button");

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
    const handle = data.member.gitHubHandle

    h1.textContent = name + prefix + ' ' + surname
    linkWebsite.href = website
    aboutMe.innerHTML = text
    image.src = img
    github.href = "https://github.com/" + handle

    console.log(github.href)
}

frontCard.addEventListener('click', function() {
    front.classList.remove('front') 
    frontCard.classList.add('flip')
    backCard.classList.add('showback')
})

backCard.addEventListener('click', function() {
    frontCard.classList.remove('flip')
    backCard.classList.remove('showback')
    front.classList.add('front')
})

button.addEventListener('click', function() {
    frontCard.classList.toggle('flip')
    backCard.classList.toggle('showback')

    if (front.classList.contains('front')) {
        front.classList.remove('front')
        button.classList.add('code')
        console.log('waar');
    } else {
        console.log('nietwaar')
        front.classList.add('front')
        button.classList.remove('code')
    }
})


