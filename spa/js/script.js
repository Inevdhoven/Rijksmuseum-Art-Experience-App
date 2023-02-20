import { fetchData } from "./modules/data.js"
import { onRouteChanged } from "./modules/router.js"
import { displayLoader, hideLoader } from "./modules/loader.js"
import { hero, top10 } from "./modules/home.js"

// Eventlisteners
window.addEventListener('hashchange', onRouteChanged);

window.addEventListener('scroll', function() {
    let scroll = window.scrollY; // De scroll positie wordt opgehaald
    const header = document.querySelector('header') // De header wordt geselecteerd
    if (scroll > 200) { // Als de scroll positie groter is dan 200px
        header.classList.add('scroll') // De class scroll wordt toegevoegd aan de header
    } else { // Als de scroll positie kleiner is dan 200px
        header.classList.remove('scroll') // De class scroll wordt verwijderd van de header
    }
});

// Logica
fetchData(); // De functie fetchData wordt aangeroepen
