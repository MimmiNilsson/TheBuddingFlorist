let carts = document.querySelectorAll("button");
let products = [
    {
        name: "Snowfall Bouquet",
        price: 349,
        inCart: 0,
        imgSrc: "../assets/Snowfall Bouquet.jpg"
    },
    {
        name: "Jingle Bell Rock",
        price: 399,
        inCart: 0,
        imgSrc: "../assets/Jingle Bell Rock.jpg"
    },
    {
        name: "Santas Little Bouquet",
        price: 299,
        inCart: 0,
        imgSrc: "../assets/Santas Little Bouquet.jpg"
    },
    {
        name: "Santas Bigger Bouquet",
        price: 399,
        inCart: 0,
        imgSrc: "../assets/Santas Bigger Bouquet.jpg"
    },
    {
        name: "Holly Jolly",
        price: 449,
        inCart: 0,
        imgSrc: "../assets/Holly Jolly.jpeg"
    },
    {
        name: "Prancer the raindeer",
        price: 499,
        inCart: 0,
        imgSrc: "../assets/Prancer The Raindeer.jpg"
    },
    {
        name: "Jingle Bells, Jingle Bells",
        price: 549,
        inCart: 0,
        imgSrc: "../assets/Jingle Bells Jingle Bells.png"
    },
    {
        name: "Rudolf the rednose raindeer",
        price: 499,
        inCart: 0,
        imgSrc: "../assets/Rudolf the rednose raindeer.png"
    },
    {
        name: "Vixen The Raindeer",
        price: 649,
        inCart: 0,
        imgSrc: "../assets/Vixen The Raindeer.png"
    },
    {
        name: "Roses Are Red, Violets Are Blue",
        price: 599,
        inCart: 0,
        imgSrc: "../assets/Roses Are Red Violets Are Blue.png"
    },
    {
        name: "All In For Christmas",
        price: 699,
        inCart: 0,
        imgSrc: "../assets/All In For Christmas.png"
    },
    {
        name: "Oh Christmas Tree ..",
        price: 699,
        inCart: 0,
        imgSrc: "../assets/Oh Christmas Tree.jpg"
    },
]



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1);
}