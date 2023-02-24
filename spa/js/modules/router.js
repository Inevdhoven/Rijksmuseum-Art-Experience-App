import '../library/routie.js';
import { search } from './search.js';
import { artists, listJars, listFurniture } from './categories.js';
import { fetchData } from './data.js';

export function onRouteChanged(data) {
    const routerView = document.querySelector('main');

    routie({
        '': function() {
            console.log('Er is iets fout gegaan')
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
            `<section class="category">
                <h1>Kunstenaars</h1>
                <ul>
                    `+ artists(data) +`
                </ul>
            </section>`
        },
        'pot': async function() {

            const result = await fetchData('pot');
            const jarList = listJars(result);

            routerView.innerHTML = 
            `<section class="category">
                <h1>Potten</h1>
                <ul>
                    `+ jarList +`
                </ul>
            </section>`
        },
        'meubels': async function() {
            
            const result = await fetchData('', '', 'meubels') 
            const furnitureList = listFurniture(result);

            routerView.innerHTML = 
            `<section class="category">
                <h1>Meubels</h1>
                <ul>
                    `+ furnitureList +`
                </ul>
            </section>`
        },
        'foto': function() {
            console.log('photos')

            fetchData('foto')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Foto's</h1>
            </section>`
        },
        'schilderij': function() {
            console.log('painting')

            fetchData('schilderij')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Schilderijen</h1>
            </section>`
        },
        'beeldhouwwerk': function() {
            console.log('sculptures')

            fetchData('beeldhouwwerk')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Beeldhouwwerk</h1>
            </section>`
        },
        'porselein': function() {
            console.log('porcelain')

            fetchData('porselein')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Porselein</h1>
            </section>`
        },
        'hout': function() {
            console.log('wood')

            fetchData('hout')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Hout</h1>
            </section>`
        },
        'olieverf': function() {
            console.log('oilpaint')

            fetchData('olieverf')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Olieverf</h1>
            </section>`
        },
        'goud': function() {
            console.log('gold')

            fetchData('goud')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Goud</h1>
            </section>`
        },
        'diamant': function() {
            console.log('diamond')

            fetchData('diamant')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Diamant</h1>
            </section>`
        },
        'ijzer': function() {
            console.log('iron')

            fetchData('ijzer')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Ijzer</h1>
            </section>`
        },
        'papier': function() {
            console.log('paper')

            fetchData('papier')

            routerView.innerHTML = 
            `<section class="category">
                <h1>Papier</h1>
            </section>`
        },
    })
}