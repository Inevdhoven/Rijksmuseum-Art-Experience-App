import { fetchData } from "./data.js"

export function artists(data) {
    const artists = data.artObjects.map(artObject => artObject.principalOrFirstMaker)
    const uniqueArtists = [...new Set(artists)] // Source: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates 
    let result = '';

    const listItems = uniqueArtists.map((artist) => {
        return `<li><a href="#artists/${artist.id}">${artist}</a></li>`
    });
    
    listItems.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result
}

export async function listJars(items) {
    const jars = items.artObjects.map(artObject => artObject)
    // const uniqueJars = [...new Set(jars)]
    let result = '';
    // console.log(jars)

    const listJars = jars.map((jar) => {
        console.log(jar.hasImage !== false)
        if(jar.hasImage !== false){
            // console.log(jar.webImage.url)
            return `<li><h2>${jar.title}</h2><img src="${jar.webImage.url}"></li>`

        }
        // if(jar.hasImage === true) {
        //     return `<li><img src="${jar.webImage.url}"><h2>${jar.title}</h2></li>`
        // }
    })
    // console.log(listJars)

    listJars.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    // // console.log(result)

    return result;

}

export async function listFurniture(items) {
    console.log(items)
    // get items
    
}

export async function artist(data) {
    // Als data gelijk is aan de geklikte artiest dan worden alle kunstwerken van die artiest getoond
}