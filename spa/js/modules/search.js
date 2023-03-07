import { CONFIG } from "./config.js"
import { errorState } from "./error.js"

export function search() {

    return `<input type="text" list="searchitems" placeholder="Zoeken...">
            <datalist id="searchitems">
                <option value="Rembrandt van Rijn"></option>
                <option value="Johannes Vermeer"></option>
                <option value="Jacob Isaacksz van Ruisdael"></option>
                <option value="Jan Havicksz. Steen"></option>
                <option value="Vincent van Gogh"></option>
            </datalist>
            <button type="submit"></button>`
    
}

export function getSearchData() {
    const input = document.querySelector('.search input')
    const searchValue = input.value;
    const url = `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100&q=${searchValue}`

    fetch(url)
    .then(response => response.json())
    .then(data => {

        const artworks = data.artObjects;

        artworks.map(artwork => {
            console.log(artwork)
            console.log(displaySearchData(artwork))
            displaySearchData(artwork)
        })
        
    })
    .catch(error => {
        window.location.hash = "error"
        errorState()
    })
}

export function displaySearchData(artwork) {
    const searchResults = document.querySelector('.search-results')
    const searchResultsListItems = document.querySelectorAll('.search-results li')

    // searchResultsListItems.forEach(searchResultsListItem => {
    //     searchResultsListItem.remove()
    // })

    const searchResult = document.createElement('li')
    const searchResultLink = document.createElement('a')
    const searchResultTitle = document.createElement('h2')
    const searchResultImage = document.createElement('img')

    searchResultLink.href = `/web-app-from-scratch-2223/spa/#details/${artwork.objectNumber}`
    searchResultTitle.textContent = artwork.title
    searchResultImage.src = artwork.webImage.url
    searchResultImage.alt = artwork.title

    searchResult.appendChild(searchResultLink)
    searchResultLink.appendChild(searchResultTitle)
    searchResultLink.appendChild(searchResultImage)

    searchResults.appendChild(searchResult)
}