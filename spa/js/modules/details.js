export function details(item) {
    const artWork = item.artObject;
    
    return `
            <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
                <path fill="#ffffff" d="M15 2C15 1.44772 15.4477 1 16 1H22C22.5523 1 23 1.44772 23 2V8C23 8.55228 22.5523 9 22 9C21.4477 9 21 8.55228 21 8V3H16C15.4477 3 15 2.55228 15 2Z" clip-rule="evenodd" fill-rule="evenodd" undefined="1"></path>
                <path fill="#ffffff" d="M1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2C9 2.55228 8.55228 3 8 3H3V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V2Z" clip-rule="evenodd" fill-rule="evenodd" undefined="1"></path>
                <path fill="#ffffff" d="M2 15C2.55228 15 3 15.4477 3 16V21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H2C1.44772 23 1 22.5523 1 22V16C1 15.4477 1.44772 15 2 15Z" clip-rule="evenodd" fill-rule="evenodd" undefined="1"></path>
                <path fill="#ffffff" d="M22 15C22.5523 15 23 15.4477 23 16V22C23 22.5523 22.5523 23 22 23H16C15.4477 23 15 22.5523 15 22C15 21.4477 15.4477 21 16 21H21V16C21 15.4477 21.4477 15 22 15Z" clip-rule="evenodd" fill-rule="evenodd" undefined="1"></path>
            </svg>
            </button>
            <div>
                <h1>${artWork.title}</h1>
                <p>${artWork.description}</p>
            </div>
            <img src="${artWork.webImage?.url || './images/placeholder.png'}"/>`;
}

export function showFullImage(item) {
    const detailsSection = document.querySelector('.details')
    const fullScreenImageBtn = document.querySelector('.details button')
    const artWork = item.artObject;

    fullScreenImageBtn.addEventListener('click', () => {
        fullScreenImageBtn.classList.toggle('show')
        detailsSection.classList.toggle('showfullimage')
        
        if (fullScreenImageBtn.classList.contains('show')) {
            const imgFull = document.createElement('img')
            imgFull.src = artWork.webImage?.url || './images/placeholder.png'
            imgFull.alt = artWork.title
            imgFull.classList.add('full-image')
            detailsSection.appendChild(imgFull)
        } else {
            const img = document.querySelector(".full-image")
            img.remove(img)
        }
    })
}