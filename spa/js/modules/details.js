export function details(item) {
    const artWork = item.artObject;
    
    return `<h2>${artWork.title}</h2>
    <img src="${artWork.webImage.url}"></img>`;
}