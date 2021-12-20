////// Our products
let products = [
    {
        id: 0,
        name: "Flower 1",
        price: 599,
        desc: "A nice fucking flower",
        inCart: 0,
        imgSrc: "../assets/products/flower 1.jpg"
    },
    {
        id: 1,
        name: "Flower 2",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 2.jpg"
    },
    {
        id: 2,
        name: "Flower 3",
        price: 499,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 3.jpg"
    }, 
    {
        id: 3,
        name: "Flower 4",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 4.jpeg"
    }, 
    {
        id: 4,
        name: "Flower 5",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 5.jpg"
    },
    {
        id: 5,
        name: "Flower 6",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 6.jpg"
    },
    {
        id: 6,
        name: "Flower 7",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 7.jpg"
    },
    {
        id: 7,
        name: "Flower 8",
        price: 799,
        desc: "flowerpower 8",
        inCart: 0,
        imgSrc: "../assets/products/flower 8.jpg"
    },
]

////// Our products container that goes into HTML card
const productsCard = document.querySelector(".container-product");

function showProducts() {
    products.forEach( (product) => {
        productsCard.innerHTML += `
            <div class="card">
                    <img src="${product.imgSrc}" alt="${product.name}" style="width:100%">
                    <h1>${product.name}</h1>
                    <p class="prodprice">${product.price}kr</p>
                    <p>
                        ${product.desc}
                    </p>
                <a class="add-cart">
                    <button class="add">Add to Pot</button>
                </a>
            </div>
        `;
    });
}
showProducts();