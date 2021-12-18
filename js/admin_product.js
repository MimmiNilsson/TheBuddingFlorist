//=============================================================================
/*===== PRODUCTS / IMPORT FROM LOCAL STORAGE ===== */
//=============================================================================

const prodString = localStorage.getItem("incomingStock");
const prodList = JSON.parse(prodString);

const insertProd = document.querySelector(".incoming-prod-admin"); 

console.log(prodList)
prodList.forEach(item => {
    insertProd.innerHTML += `
    <div>
    Name: ${item.heading}<br>
    <img src="${item.image}" height="10%" width="10%"><br>
    Price: ${item.price} SEK<br>
    Description: ${item.desc}<br>
    <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>`;
    // <button class="delete-btn" onclick="removeIncomingProd(${item.id})">x</button>`;
})

