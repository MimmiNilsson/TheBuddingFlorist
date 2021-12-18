//=============================================================================
/*===== ADMIN / NAVBAR ===== */
//=============================================================================
const toggleButton = document.getElementsByClassName('toggle-button')[0];

console.log(toggleButton);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


console.log(navbarLinks);

console.log(navbarLinks.classList)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

//=============================================================================
/*===== ADMIN / MAIN =====*/
//=============================================================================
const heading = document.querySelector("#prod-heading");
const image = document.querySelector("#prod-img");
const price = document.querySelector("#prod-price");
const desc = document.querySelector("#prod-desc");
const addBtn = document.querySelector("#main-add-btn");

const prodInfo = document.querySelectorAll(".main-add-prod");

const incomingList = document.querySelector("#main-incoming-prod");

const localStorageNewProduct = JSON.parse(localStorage.getItem('incomingStock'));

// Using local storage or empty array to update or add new products to 
let incomingStock = localStorage.getItem('incomingStock') !== null ? localStorageNewProduct : [];

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

        updateLocalStorage();

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
    
    item.innerHTML = `
    <div>
        ${incomingProd.heading}
        <img src="${incomingProd.image}" height="100%">
        ${incomingProd.price}
        ${incomingProd.desc}
        <button class="main-delete-btn" onclick="removeIncomingProd(${incomingProd.id})">x</button>
    </div>`;

    incomingList.appendChild(item);


    // `Product Name: ${incomingProd.heading}
    // Product Image:  
    // <img src="${incomingProd.image}">
    // Price of Product: ${incomingProd.price} 
    // Product Description: ${incomingProd.desc}
    // <button class="delete-btn" onclick="removeIncomingProd(${incomingProd.id})">x</button>`;

    // incomingList.appendChild(item);

    // item.innerHTML = `
    // <div class="prod-item">
    //     <div class="products-prod-container">
    //         <div class="prod-item-container">
    //             <div class="prod-heading">${incomingProd.heading}</div>
    //             <img class="prod-img" src="${incomingProd.image}">
    //             <div class="prod-price">${incomingProd.price}</div>
    //             <div class="prod-desc">${incomingprod.desc}</div>
    //             <button class="delete-btn" onclick="removeIncomingProd(${incomingProd.id})">x</button>
    //         </div>
    //     </div>
    // </div>
    // `;
    
    
    

    // // Product Image: ${incomingProd.image} 

   
}

// https:dsaasdfas

// img src

// Using ID to remove transaction
function removeIncomingProd(id) {
    incomingStock =  incomingStock.filter(incomingProd => incomingProd.id !== id);

     updateLocalStorage();
    
    init();
}

// Update local storage added products
function updateLocalStorage() {
    localStorage.setItem('incomingStock', JSON.stringify(incomingStock));
}

// Init app
function init() {
    incomingList.innerHTML = '';

    incomingStock.forEach(addIncomingDOM);
}

init();

// Event listener for submission
addBtn.addEventListener('click', addNewProduct);

//=============================================================================
/*===== PUBLISH PRODUCT LIST =====*/
//=============================================================================

const pubBtn = document.querySelector(".main-pub-btn");

 pubBtn.addEventListener('click', (e)=> {
     e.preventDefault()
    window.location.href = "../html/products.html";

    heading.value = '';
    image.value = '';
    price.value = '';
    desc.value = '';
 });





