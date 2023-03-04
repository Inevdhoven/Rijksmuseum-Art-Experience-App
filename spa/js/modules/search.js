
export function search(data) {
    // const searchButton = document.querySelector('header nav ul li:nth-of-type(2) a')

        return `<input type="text" list="searchitems" placeholder="Zoeken...">
         <datalist id="searchitems">
            <option value="Rembrandt van Rijn"></option>
            <option value="Johannes Vermeer"></option>
            <option value="Jacob Isaacksz van Ruisdael"></option>
            <option value="Jan Havicksz. Steen"></option>
            <option value="Vincent van Gogh"></option>
            <option value="Potten"></option>
         </datalist>`
}