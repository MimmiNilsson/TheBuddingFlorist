//=============================================================================
/*===== MIMMI: PRODUCTS / IMPORT FROM LOCAL STORAGE ===== */
//=============================================================================

const prodString = localStorage.getItem("incomingStock");
const prodList = JSON.parse(prodString);

const insertProd = document.querySelector(".products"); 

console.log(prodList)
prodList.forEach(item => {
    insertProd.innerHTML += `
    <div class="card">
        <div class="heart"></div>
        <img src="${item.imgSrc}" alt="${item.name}" style="width:100%"><br>
        <h1 class="prod-h1">${item.name}</h1>
        <p class="prod-price">${item.price} SEK</p>
        <p class="prod-desc">${item.desc}</p>
        <a class="add-cart">
            <button class="add" onclick="addToCart(${item.id})">Add to Cart</button>
         </a>
    </div>
        `;
})
