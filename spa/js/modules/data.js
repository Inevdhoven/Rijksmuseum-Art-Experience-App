import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"
import { CONFIG } from "./config.js"

export async function fetchData(type, material, q) {
    // const type = 'pot'
    // const material = 'porcelain'
    let url =  `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100`
    if (type) {
        url += `&type=${type}`
    }
    if (material) {
        url += `&material=${material}`
    }
    if (q) {
        url += `&q=${q}`
    }

    const args = {'type': type, 'material': material, 'q': q};

    // const urlAPI = `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100`
    // const urlAPIType = `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100` + `&type=${type}`
    // const urlAPIMaterial = `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100` + `&material=${material}`

    const response = await fetch(url);

    if (response.ok ) {

        let result = await response.json();
        result.apiArguments = args;
    
        return result;
    } else {
        throw new Error('HTTP ERROR!!!')
    }


    // De data wordt opgehaald
    // .then(response => response.json())
    // .then(result => {
    //     console.log('got something');
    //     console.log(result);
    //     return result;
    // }) // Data wordt omgezet naar JSON
    // .catch(error => {
    //     console.log(error);
    // })
    // return fetch(urlAPIType)
    // .then(response => response.json())
    // .catch(error => {
    //     console.log(error);
    // })
    // return fetch(urlAPIMaterial)
    // .then(response => response.json())
    // .catch(error => {
    //     console.log(error);
    // })
}