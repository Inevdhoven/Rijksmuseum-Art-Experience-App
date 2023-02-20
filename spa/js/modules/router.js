import '../library/routie.js';

export function onRouteChanged() {
    const routerView = document.querySelector('main');

    routie({
        '': function() {
            console.log('Er is iets fout gegaan')
        },
        'artists': function() {
            console.log('artists')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Kunstenaars</h1>
            </section>`
        },
        'jars': function() {
            console.log('jars')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Potten</h1>
            </section>`
        },
        'furniture': function() {
            console.log('furniture')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Meubels</h1>
            </section>`
        },
        'photos': function() {
            console.log('photos')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Foto's</h1>
            </section>`
        },
        'paintings': function() {
            console.log('painting')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Schilderijen</h1>
            </section>`
        },
        'sculptures': function() {
            console.log('sculptures')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Beeldhouwwerk</h1>
            </section>`
        },
        'porcelain': function() {
            console.log('porcelain')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Porselein</h1>
            </section>`
        },
        'wood': function() {
            console.log('wood')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Hout</h1>
            </section>`
        },
        'oilpaint': function() {
            console.log('oilpaint')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Olieverf</h1>
            </section>`
        },
        'gold': function() {
            console.log('gold')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Goud</h1>
            </section>`
        },
        'diamond': function() {
            console.log('diamond')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Diamant</h1>
            </section>`
        },
        'iron': function() {
            console.log('iron')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Ijzer</h1>
            </section>`
        },
        'paper': function() {
            console.log('paper')
            routerView.innerHTML = 
            `<section class="category">
                <h1>Papier</h1>
            </section>`
        },
    })
}