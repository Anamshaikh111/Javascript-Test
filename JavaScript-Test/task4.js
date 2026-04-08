function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}

const products = [
    {name: "Keyboard", price: 499},
    {name: "Headphones", price: 299},
    {name: "Speaker", price: 499}
];

console.log(sortProducts(products));