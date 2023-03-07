// Source Loader: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m
export function displayLoader() {
    const loader = document.querySelector('.loader')
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    main.classList.add('hide')
    header.classList.add('hide')
    loader.classList.remove('hide')
    // setTimeout(() => {
    //     loader.classList.remove("display");
    // }, 200); // to stop loading after some time
}

export function hideLoader() {
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const loader = document.querySelector('.loader')
    loader.classList.add('hide')
    main.classList.remove('hide')
    header.classList.remove('hide')
}

