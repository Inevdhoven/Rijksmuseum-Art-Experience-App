// Variables
const keyAPI = 'A5AmwJwG'
const urlAPI = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100`

// Functions
async function fetchData() {
    const data = await fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
        getData(data)
    })
}

function getData(data) {
    const top10 = data.artObjects.slice(0, 10);
    const imgURLs = top10.map(artObject => artObject.webImage.url);
    const titles = top10.map(artObject => artObject.title);
    const topPieces = document.querySelector('main section:first-of-type section:nth-of-type(2) ul')
    const topPiecesLi = document.createElement('li')
    
    console.log(data)

    imgURLs.forEach((imgURL, title) => {
        const topPiecesLi = document.createElement('li')
        const topPiecesImg = document.createElement('img')
        const topPiecesH3 = document.createElement('h3')

        topPiecesImg.src = imgURL
        topPiecesLi.appendChild(topPiecesImg)
        topPieces.appendChild(topPiecesLi)

        topPiecesH3.textContent = top10[title].title
        topPiecesLi.appendChild(topPiecesH3)

        topPiecesImg.alt = top10[title].title
    });
}

// Logica
fetchData();
