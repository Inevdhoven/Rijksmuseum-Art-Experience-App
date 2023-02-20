// Variables
const keyAPI = 'A5AmwJwG'
const type = 'pot'
const urlAPI = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100`
const urlAPIType = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100` + `&type=${type}`

// Functions
async function fetchData() {
    const data = await fetch(urlAPI) // Data wordt opgehaald uit de API
    .then(response => response.json()) // Data wordt omgezet naar JSON
    .then(data => { 
        hero(data) // data wordt doorgegeven aan de functie hero
        top10(data) // data wordt doorgegeven aan de functie top10
    })
    const data2 = await fetch(urlAPIType) // Data wordt opgehaald uit de API
    .then(response => response.json()) // Data wordt omgezet naar JSON
    .then(data2 => {
        typeJars(data2)
    })
}

function hero(data) {
    const heroObject = data.artObjects.find(artObject => artObject.objectNumber === 'SK-A-3064') // De afbeelding van het object met het objectnummer SK-A-5 wordt opgehaald
    const heroImage = heroObject.webImage.url // De url van de afbeelding wordt opgehaald
    const hero = document.querySelector('main section:first-of-type section:first-of-type h1') // De hero wordt geselecteerd
    console.log(heroImage);
    hero.insertAdjacentHTML(
        'afterend', 
        `<img src="${heroImage}" alt="${heroObject.title}">`
        ) // De afbeelding wordt in de hero gezet
    console.log(heroObject.title);
}

function top10(data) { // De functie top10 wordt aangemaakt en krijgt de data mee
    const top10 = data.artObjects.map(artObject => artObject).slice(0, 10) // De eerste 10 objecten worden opgehaald uit de api
    const ulTop10 = document.querySelector('main section:first-of-type section:nth-of-type(2) ul') // De ul wordt geselecteerd

    top10.map((artObject, index) => { // De 10 objecten worden doorlopen
        // De data wordt in de ul gezet 
        ulTop10.insertAdjacentHTML( 
            'afterbegin', 
            `<li>
                <a href="">
                    <img src="${artObject.webImage.url}" alt="${artObject.title}">
                    <h3>${artObject.title}</h3>
                </a>
            </li>`
        )
    })
}

function typeJars(data) {
    const jars = data.artObjects.map(artObject => artObject)
    console.log(jars);
}

function onRouteChanged() {
    const hash = window.location.hash;
    const routerView = document.querySelector('main');
    console.log(window.location.hash);

    if(!(routerView instanceof HTMLElement)) {
        throw new ReferenceError('No router view element available for rendering')
    }

    switch(hash) {
        case '#home':
            routerView.innerHTML = '<h1>Home page</h1>';
            break;
        case '#about':
            routerView.innerHTML = '<h1>About page</h1>';
            break;
        default:
            routerView.innerHTML = '<h1>404 - Page Not Found</h1>';
            break;
    }
}

window.addEventListener('hashchange', onRouteChanged);

// Logica
fetchData();
