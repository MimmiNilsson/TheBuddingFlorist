/*===== ADMIN / NAVBAR ===== */
const toggleButton = document.getElementsByClassName('toggle-button')[0];

console.log(toggleButton);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


console.log(navbarLinks);

console.log(navbarLinks.classList)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// empty array eller information från localstorage 
const adminStock = JSON.parse( localStorage.getItem("adminStock")) || [];

function adminAddStock(e) {
    e.preventDefault();
// vi läser in input fältet och sparar data in i localstorage
const src= document.querySelector("#imgSrc").value;
const productName= document.querySelector("#productName").value
let productObj= {
    productName:productName,
    img:src
}
 productList.push(productObj)
 localStorage.setItem("productList", JSON.stringify(productList))
 //const oldProduct= localStorage.getItem("productList");
 //productList.concat(oldProduct);
// array av object 
}



document.querySelector("button").addEventListener("click" , addProduct);