export function details(item) {
    const artWork = item.artObject;
    
    return `
            <div>
                <h1>${artWork.title}</h1>
                <p>${artWork.description}</p>
            </div>
            <img src="${artWork.webImage?.url || 'https://via.placeholder.com/150'}"/>`;
}

export function showFullImage(item) {
    const artWorkImage = item.artObject.webImage?.url || 'https://via.placeholder.com/150'

    artWorkImage.addEventListener('click', () => {
        const fullImage = document.createElement('img');
        fullImage.src = artWorkImage.src;
        fullImage.classList.add('full-image');
        document.body.appendChild(fullImage);
    })
}