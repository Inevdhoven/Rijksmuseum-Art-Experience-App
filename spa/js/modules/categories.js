export function artists(data) {
    const artists = data.artObjects.map(artObject => artObject.principalOrFirstMaker)
    const uniqueArtists = [...new Set(artists)] // Source: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates 
    let result = '';

    const listItems = uniqueArtists.map((artist) => {
        return `
        <li>
            <a href="#artist/${artist}">
                ${artist}
            </a>
        </li>`
    });
    
    listItems.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result
}

let link = '';
console.log()

export function listJars(items) {
    const jars = items.artObjects.map(artObject => artObject)
    let result = '';

    const listJars = jars.map((jar) => {
        if(jar.hasImage !== false){
            return `
            <li>
                <a href="#details/${jar.objectNumber}">
                    <h2>${jar.title}</h2>
                    <img src="${jar.webImage.url}">
                </a>
            </li>`

        } else {
            return ``
        }
    })

    listJars.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;

}

export function listFurniture(items) {
    console.log(items)
    // get items

    const furnitures = items.artObjects.map(artObject => artObject)
   
    let result = '';
    console.log(furnitures)

    const listFurniture = furnitures.map((furniture) => {
        // console.log(jar.hasImage !== false)
        // console.log(jar)
        if(furniture.hasImage !== false){
            return `
            <li>
                <a href="#details/${furniture.objectNumber}">
                    <h2>${furniture.title}</h2>
                    <img src="${furniture.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })
    // console.log(listJars)

    listFurniture.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function artist(data) {
    // Als data gelijk is aan de geklikte artiest dan worden alle kunstwerken van die artiest getoond
}