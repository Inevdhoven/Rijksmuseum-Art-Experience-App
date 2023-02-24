import { fetchData } from "./modules/data.js"
import { onRouteChanged } from "./modules/router.js"
import { displayLoader, hideLoader } from "./modules/loader.js"
import { hero, top10 } from "./modules/home.js"
import { artists } from "./modules/categories.js"

let globalData;

// Eventlisteners
// window.addEventListener('hashchange', function () {
    // onRouteChanged(globalData); // De functie onRouteChanged wordt aangeroepen en de globalData wordt meegegeven
// }, false);

// Source for scroll: https://ryfarlane.com/article/get-scroll-position-vanilla-javascript
window.addEventListener('scroll', function() {
    let scroll = window.scrollY; // De scroll positie wordt opgehaald
    const header = document.querySelector('header') // De header wordt geselecteerd
    if (scroll > 10) { // Als de scroll positie groter is dan 200px
        header.classList.add('scroll') // De class scroll wordt toegevoegd aan de header
    } else { // Als de scroll positie kleiner is dan 200px
        header.classList.remove('scroll') // De class scroll wordt verwijderd van de header
    }
});

// window.addEventListener('hashchange', () => {
//     if(location.hash === `#${link}`){
//         console.log('HALLO')
//     }
// }, false)
// emptyState()
displayLoader(); // De loader wordt getoond

dataDisplay().then((result) => {
    onRouteChanged(result);
}); 

async function dataDisplay () {

    try {

        const data = await fetchData();

        // console.log('HALLO');
        // console.log(data);

        globalData = data;
        // hideLoader() // De loader wordt verborgen
        // hero(data) // data wordt doorgegeven aan de functie hero
        // top10(data) // data wordt doorgegeven aan de functie top10
            //artists(data) // data wordt doorgegeven aan de functie artists
        // .then(data => {
        //     console.log('DONE?');
        //     console.log(data);
        //     globalData = data;
        //     hideLoader() // De loader wordt verborgen
        //     hero(data) // data wordt doorgegeven aan de functie hero
        //     top10(data) // data wordt doorgegeven aan de functie top10
        //     //artists(data) // data wordt doorgegeven aan de functie artists
        // })
        
        return data;
    // Error handling
    } catch (error) {
        console.log(error);
    }

}

// Logica

    // .then(types => {
    //     globalData = types;
    //     console.log(types)
    // })
    // .then(materials => {
    //     globalData = materials;
    //     console.log(materials)
    // })