function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const searchInput = document.getElementById("search");

searchInput.addEventListener(
    "input",
    debounce(() => {
        console.log("Search Triggered!");
    }, 300)
);