// Variables
const keyAPI = 'A5AmwJwG'
const urlAPI = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100`

// Functions
async function fetchData() {
    const data = await fetch(urlAPI) // Data wordt opgehaald uit de API
    .then(response => response.json()) // Data wordt omgezet naar JSON
    .then(data => { 
        top10(data) // data wordt doorgegeven aan de functie top10
    })
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

// Logica
fetchData();
