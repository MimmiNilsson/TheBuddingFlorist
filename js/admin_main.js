/*===== ADMIN / NAVBAR ===== */
const toggleButton = document.getElementsByClassName('toggle-button')[0];

console.log(toggleButton);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


console.log(navbarLinks);

console.log(navbarLinks.classList)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

/*===== ADMIN / MAIN =====*/
const heading = document.querySelector("#prod-heading");
const image = document.querySelector("#prod-img");
const price = document.querySelector("#prod-price");
const desc = document.querySelector("#prod-desc");
const addBtn = document.querySelector("#main-add-btn");

const prodInfo = document.querySelector(".main-add-prod");

const incomingList = document.querySelector("#main-incoming-prod");

// Open array to add new products to 
let incomingStock = [];

// Adding new product
function addNewProduct(e) {
    e.preventDefault();

    if(prodInfo.value == '') {
        alert('Please fill out all fields before continuing.')
    } else {
        const incomingProd = {
            id: generateID(),
            heading: heading.value,
            image: image.value,
            price: +price.value,
            desc: desc.value
        };

        incomingStock.push(incomingProd);

        addIncomingDOM(incomingProd);

        heading.value = '';
        image.value = '';
        price.value = '';
        desc.value = '';
    }
}

// Generate ID by using random
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add product to DOM list
function addIncomingDOM(incomingProd) {
    const item = document.createElement('li');

    item.innerHTML = 
    `Product Name: ${incomingProd.heading} 
    Product Image: ${incomingProd.image} 
    Price of Product: ${incomingProd.price} 
    Product Description: ${incomingProd.desc}
    <button class="delete-btn" onclick="removeIncomingProd(${incomingProd.id})">x</button>`;

    incomingList.appendChild(item);
}

// https:dsaasdfas

// img src

// Using ID to remove transaction
function removeIncomingProd(id) {
    incomingStock = incomingProd.filter(incomingProd => incomingProd.id !== id);
    
    init();
}

// Init app
function init() {
    incomingList.innerHTML = '';

    incomingStock.forEach(addIncomingDOM);
}

init();

// Event listener for submission
addBtn.addEventListener('click', addNewProduct);

/*===== LOCAL STORAGE =====*/
// empty array eller information från localstorage 
// const adminList = JSON.parse(localStorage.getItem("productList")) || [];
// gammalLista  + nytt lista




