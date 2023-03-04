import '../library/routie.js';
import { search } from './search.js';
import { artists, listJars, listFurniture } from './categories.js';
import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"
import { details, showFullImage } from './details.js';
import { artistOverview } from './overview.js';
import { fetchData } from './data.js';

export function onRouteChanged(data) {
    const routerView = document.querySelector('main');
    hideLoader() // De loader wordt verborgen

    routie({
        '': function() {
            hero(data) // data wordt doorgegeven aan de functie hero
            top10(data) // data wordt doorgegeven aan de functie top10
        },
        'search': function() {
            console.log('search')
            routerView.innerHTML = 
            `<section class="search">
                ` + search() + `
            </section>`
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
            const furnitureList = listFurniture(result);

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
            console.log('painting')

            fetchData('schilderij')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Schilderijen</h1>
            </section>`
        },
        'beeldhouwwerk': async function() {
            console.log('sculptures')

            fetchData('beeldhouwwerk')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Beeldhouwwerk</h1>
            </section>`
        },
        'porselein': async function() {
            console.log('porcelain')

            fetchData('porselein')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Porselein</h1>
            </section>`
        },
        'hout': async function() {
            console.log('wood')

            fetchData('hout')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Hout</h1>
            </section>`
        },
        'olieverf': function() {
            console.log('oilpaint')

            fetchData('olieverf')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Olieverf</h1>
            </section>`
        },
        'goud': function() {
            console.log('gold')

            fetchData('goud')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Goud</h1>
            </section>`
        },
        'diamant': async function() {
            console.log('diamond')

            fetchData('diamant')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Diamant</h1>
            </section>`
        },
        'ijzer': async function() {
            console.log('iron')

            fetchData('ijzer')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Ijzer</h1>
            </section>`
        },
        'papier': async function() {
            console.log('paper')

            fetchData('papier')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Papier</h1>
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
        
    })
}

