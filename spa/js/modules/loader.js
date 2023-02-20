// Source Loader: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m
export function displayLoader() {
    const loader = document.querySelector('.loader')
    loader.classList.add('display')
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000); // to stop loading after some time
}

export function hideLoader() {
    const loader = document.querySelector('.loader')
    loader.classList.remove('display')
}

