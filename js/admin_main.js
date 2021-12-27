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

const name = document.querySelector("#prod-heading");
const imgSrc = document.querySelector("#prod-img");
const price = document.querySelector("#prod-price");
const desc = document.querySelector("#prod-desc");
const addBtn = document.querySelector("#main-add-btn");

// const prodInfo = document.querySelectorAll(".main-add-prod"); 

const incomingList = document.querySelector("#main-incoming-prod");

const localStorageNewProduct = JSON.parse(localStorage.getItem('incomingStock'));

// Using local storage or empty array to update or add new products to 
let incomingStock = localStorage.getItem('incomingStock') !== null ? localStorageNewProduct : [];

// Adding new product
function addNewProduct(e) {
    e.preventDefault();

    if(name.value == '' || imgSrc.value == '' || price.value == '' || desc.value == '') {
        alert('Hey, Admin! It would appear that you have forgotten to add some information to your new awesome product. Once you have it all, you can add the product to the list.')
    } else {
        const incomingProd = {
            id: generateID(),
            name: name.value,
            imgSrc: imgSrc.value,
            price: +price.value,
            desc: desc.value,
            instock: 1000,
        };

        incomingStock.push(incomingProd);

        addIncomingDOM(incomingProd);

        updateLocalStorage();

        name.value = '';
        imgSrc.value = '';
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
        <p class="admin-main-text" id="admin-main-text-heading">${incomingProd.name}</p>
        <img class="admin-main-text" id="admin-main-pic" src="${incomingProd.imgSrc}" height="100%" width="25%">
        <p class="admin-main-text" id="admin-main-cost">${incomingProd.price} SEK</p>
        <p class="admin-main-text">${incomingProd.desc}</p>
        <button class="main-delete-btn" onclick="removeIncomingProd(${incomingProd.id})"><i class="far fa-times-circle"></i></button>
        
    </div>`;

    incomingList.appendChild(item);
}

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

    name.value = '';
    imgSrc.value = '';
    price.value = '';
    desc.value = '';

 });





