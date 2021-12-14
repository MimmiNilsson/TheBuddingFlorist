/*===== ADMIN / NAVBAR ===== */
const toggleButton = document.getElementsByClassName('toggle-button')[0];

console.log(toggleButton);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


console.log(navbarLinks);

console.log(navbarLinks.classList)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

/*===== ADMIN / IMPORT NEW STOCK ===== */

// empty array eller information från localstorage 
const adminList = JSON.parse(localStorage.getItem("productList")) || [];

// gammalLista  + nytt lista


function addAdminProduct(e) {
    e.preventDefault();
// vi läser in input fältet och sparar data in i localstorage
const prodTitle= document.querySelector("#prod-title").value;
const prodPrice= document.querySelector("#prod-price").value;

let productObj= {
    prodTitle,
    prodPrice
}
 adminList.push(productObj)
 localStorage.setItem("adminList", JSON.stringify(adminList));
}

document.querySelector("button").addEventListener("click" , addAdminProduct);