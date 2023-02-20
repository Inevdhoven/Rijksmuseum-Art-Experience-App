import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"

export async function fetchData() {
    const keyAPI = 'A5AmwJwG'
    const type = 'pot'
    const urlAPI = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100`
    const urlAPIType = `https://www.rijksmuseum.nl/api/nl/collection?key=${keyAPI}&ps=100` + `&type=${type}`

    displayLoader() // De loader wordt getoond
    const data = await fetch(urlAPI) // Data wordt opgehaald uit de API
    .then(response => response.json()) // Data wordt omgezet naar JSON
    .then(data => { 
        hideLoader() // De loader wordt verborgen
        hero(data) // data wordt doorgegeven aan de functie hero
        top10(data) // data wordt doorgegeven aan de functie top10
    })
    .catch(error => {
        console.log(error);
    })
    // const data2 = await fetch(urlAPIType) // Data wordt opgehaald uit de API
    // .then(response => response.json()) // Data wordt omgezet naar JSON
    // .then(data2 => {
    //     typeJars(data2)
    // })
}