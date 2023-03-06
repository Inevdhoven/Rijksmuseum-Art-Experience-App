import '../library/routie.js';
import { search, getSearchData, displaySearchData } from './search.js';
import { artists, listJars, listFurniture } from './categories.js';
import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"
import { details, showFullImage } from './details.js';
import { artistOverview } from './overview.js';
import { fetchData } from './data.js';
import { errorState } from './error.js';

export function onRouteChanged(data) {
    const routerView = document.querySelector('main');
    hideLoader() // De loader wordt verborgen

    routie({
        '': function() {
            hero(data) // data wordt doorgegeven aan de functie hero
            top10(data) // data wordt doorgegeven aan de functie top10
        },
        'search': async function() {
            
            routerView.innerHTML = 
            `<section class="search">
                ` + search() +`

                <ul class="search-results"></ul>
            </section>`;

            const searchButton = document.querySelector('button')
            
            searchButton.addEventListener('click', () => {
                getSearchData()
            })
            
        },
        'artists': function() {
            routerView.innerHTML = 
            `<section class="category artists">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Kunstenaars</h1>
                <ul>
                    `+ artists(data) +`
                </ul>
            </section>`
        },
        'artist/:name': async function(involvedMaker) {
            const result = await fetchData(null, null, null, involvedMaker)
            const overview = artistOverview(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>`+ involvedMaker +`</h1>
                <ul>
                    `+ overview +`
                </ul>
            </section>`
        },
        'pot': async function() {

            const result = await fetchData('pot')
            const jarList = listJars(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Potten</h1>
                <ul>
                    `+ jarList +`
                </ul>
            </section>`
        }, 
        'meubels': async function() {
            
            const result = await fetchData(null, null, 'meubels', null) 
            const furnitureList = listFurniture(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Meubels</h1>
                <ul>
                    `+ furnitureList +`
                </ul>
            </section>`
        },
        'foto': async function() {
            console.log('photos')

            fetchData('foto')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Foto's</h1>
            </section>`
        },
        'schilderij': async function() {
            const result = await fetchData('schilderij')
            const paintingList = listPaintings(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Schilderijen</h1>
                <ul>
                    `+ paintingList +`
                </ul>
            </section>`
        },
        'beeldhouwwerk': async function() {
            const result = await fetchData(null, 'beeldhouwwerk')
            const sculpturesList = listSculptures(result)

            fetchData('beeldhouwwerk')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Beeldhouwwerk</h1>
                <ul>
                    `+ sculpturesList +`
                </ul>
            </section>`
        },
        'porselein': async function() {
            const result = await fetchData(null, 'porselein')
            const porcelainList = listPorcelain(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Porselein</h1>
                <ul>
                    `+ porcelainList +`
                </ul>
            </section>`
        },
        'hout': async function() {
            const result = await fetchData(null, 'hout')
            const woodList = listWood(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Hout</h1>
                <ul>
                    `+ woodList +`
                </ul>
            </section>`
        },
        'olieverf': async function() {
            const result = await fetchData(null, 'olieverf')
            const oilpaintList = listOilpaint(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Olieverf</h1>
                <ul>
                    `+ oilpaintList +`
                </ul>
            </section>`
        },
        'goud': async function() {
            const result = await fetchData(null, 'goud')
            const goldList = listGold(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Goud</h1>
                <ul>
                    `+ goldList +`
                </ul>
            </section>`
        },
        'diamant': async function() {
            const result = await fetchData(null, 'diamant')
            const diamondList = listDiamond(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Diamant</h1>
                <ul>
                    `+ diamondList +`
                </ul>
            </section>`
        },
        'ijzer': async function() {
            const result = await fetchData(null, 'ijzer')
            const ironList = listIron(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Ijzer</h1>
                <ul>
                    `+ ironList +`
                </ul>
            </section>`
        },
        'papier': async function() {
            const result = await fetchData(null, 'papier')
            const paperList = listPaper(result)

            console.log('paper')

            fetchData('papier')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Papier</h1>
                <ul>
                    `+ paperList +`
                </ul>
            </section>`
        },
        'details/:objectNumber': async function(objectNumber) {
            console.log(objectNumber)
            const result = await fetchData(null, null, null, null, objectNumber)
            const detailsData = details(result, objectNumber)
            
            routerView.innerHTML = 
            `<section class="details">
                <a href="javascript: history.go(-1)">Terug</a>
                `+ detailsData +`
            </section>`
        },
        '*': function () {
            console.log('error handling');
            routerView.innerHTML = 
            `<section class="error">
                `+ errorState() +`
            </section>`
        }
         
    })
}

