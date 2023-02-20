import { fetchData } from "./data.js"

export function hero(data) {
    const heroObject = data.artObjects.find(artObject => artObject.objectNumber === 'SK-A-3064') // De afbeelding van het object met het objectnummer SK-A-5 wordt opgehaald
    const heroImage = heroObject.webImage.url // De url van de afbeelding wordt opgehaald
    const hero = document.querySelector('main section:first-of-type section:first-of-type h1') // De hero wordt geselecteerd
    hero.insertAdjacentHTML(
        'afterend', 
        `<img src="${heroImage}" alt="Achtergrond afbeelding: ${heroObject.title}">`
    ) // De afbeelding wordt in de hero gezet
}

export function top10(data) { // De functie top10 wordt aangemaakt en krijgt de data mee
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

//<h3>${artObject.title}</h3>