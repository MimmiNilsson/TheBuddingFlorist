let carts = document.querySelectorAll('.add-cart');
let productsAll = products.concat(products2);

/////////////////// To listen when u press "add to pot"
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(productsAll[i]);
        totalCost(productsAll[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

////////////////////
function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else{
        localStorage.setItem("cartNumbers", 1)
        document.querySelector(".cart span").textContent = 1;
    }
    setItems(product);
}

///////////////////// Get the right product with name + id
function setItems(product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.id] == undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
        [product.id]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}
/////////////////// total price, for each product
function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
    localStorage.setItem("totalCost", product.price);
    }
}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector (".products");
    let cartCost = localStorage.getItem("totalCost");
    
//////////////////// In cart, items, price etc...
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="trash-outline"></ion-icon>
                <img src="${item.imgSrc}" alt="${item.name}">
                <span>${item.name}</span>
            </div>
            <div class="price">
                ${item.price}kr
            </div>
            <div class="quantity">
                <ion-icon name="chevron-back-outline"></ion-icon>
                <span id="txtNumber">${item.inCart}</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            <div class="total">
                ${item.inCart * item.price}kr
            </div>
            `;
        });
        
//////////////// Total cost / checkout
            productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    ${cartCost}kr
                </h4>
                <a href="./checkout.html"><button class="checkOutBtn"><span>Checkout </span></button>     
            `;
    }
}
onLoadCartNumbers();
displayCart();