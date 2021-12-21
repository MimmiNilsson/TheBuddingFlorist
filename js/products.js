////// Our products
let products = [
    {
        id: 0,
        name: "R",
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
        name: "Pretty ladys",
        price: 799,
        desc: "Ouuuuh pretty ladys",
        inCart: 0,
        imgSrc: "../assets/products/flower 7.jpg"
    },
    {
        id: 7,
        name: "Red roses",
        price: 799,
        desc: "Roses really smell like poo poo poo",
        inCart: 0,
        imgSrc: "../assets/products/flower 8.jpg"
    },
]
// Products Landing page
let products2 = [
    {
        id: 30,
        name: "Snowfall Bouquet",
        price: 349,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Snowfall Bouquet.jpg"
    },
    {
        id: 31,
        name: "Jingle Bell Rock",
        price: 399,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Jingle Bell Rock.jpg"
    },
    {
        id: 32,
        name: "Santas Little Bouquet",
        price: 299,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Santas Little Bouquet.jpg"
    },
    {
        id: 33,
        name: "Santas Bigger Bouquet",
        price: 399,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Santas Bigger Bouquet.jpg"
    },
    {
        id: 34,
        name: "Holly Jolly",
        price: 449,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Holly Jolly.jpeg"
    },
    {
        id: 35,
        name: "Prancer the raindeer",
        price: 499,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Prancer The Raindeer.jpg"
    },
    {
        id: 36,
        name: "Jingle Bells, Jingle Bells",
        price: 549,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Jingle Bells Jingle Bells.png"
    },
    {
        id: 37,
        name: "Rudolf the rednose raindeer",
        price: 499,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Rudolf the rednose raindeer.png"
    },
    {
        id: 38,
        name: "Vixen The Raindeer",
        price: 649,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Vixen The Raindeer.png"
    },
    {
        id: 39,
        name: "Roses Are Red, Violets Are Blue",
        price: 599,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Roses Are Red Violets Are Blue.png"
    },
    {
        id: 40,
        name: "All In For Christmas",
        price: 699,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/All In For Christmas.png"
    },
    {
        id: 41,
        name: "Oh Christmas Tree ..",
        price: 699,
        desc: "A nice fFESAFASEFEFEFasr",
        inCart: 0,
        imgSrc: "../assets/landing_page/Oh Christmas Tree.jpg"
    },
]

////// Our products container that goes into HTML card
const productsCard = document.querySelector(".container-product");

function showProducts() {
    products.forEach( (product) => {
        productsCard.innerHTML += `
            <div class="card">
            <div class="heart"></div>
                    <img src="${product.imgSrc}" alt="${product.name}" style="width:100%">
                    <h1>${product.name}</h1>
                    <p class="prodprice">${product.price}kr</p>
                    <p>
                        ${product.desc}
                    </p>
                <a class="add-cart">
                    <button class="add">Add to Cart</button>
                </a>
            </div>
        `;
    });
}
showProducts();