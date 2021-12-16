//=============================================================================
/*===== PRODUCTS / IMPORT FROM LOCAL STORAGE ===== */
//=============================================================================
const prodString = localStorage.getItem("incomingStock");
const prodList = JSON.parse(prodString);

const insertProd = document.querySelector(".incoming-prod-admin"); 

console.log(prodList)
prodList.forEach(item => {
    insertProd.innerHTML += 
    `<div> Product Name: ${item.heading} 
    Product Image: </div>
    <img src="${item.image}">
    <div>  Price of Product: ${item.price}  </div>
    Product Description: ${item.desc}
    <button class="delete-btn" onclick="removeIncomingProd(${item.id})">x</button>`;
})



// prodList.map( (product) => {
//     div.innerHTML = 
//     `Product Name: ${incomingProd.heading} 
//     Product Image: 
//     <img src="${incomingProd.image}">
//     Price of Product: ${incomingProd.price} 
//     Product Description: ${incomingProd.desc}
//     <button class="delete-btn" onclick="removeIncomingProd(${incomingProd.id})">x</button>`;
// })

// https:dsaasdfas

// img src

// const productString= localStorage.getItem("incomingStock");

// const productList = JSON.parse(productString);
// console.log(productList)
// productList.map( (product)=> {
//     document.querySelector("div").innerHTML += "<div>" + product.productName +"</div>" 
//     + "<img src=" + product.img+ "  alt='image should be shown here' class='product-img'>";
// })
