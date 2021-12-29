// SELECT ELEMENTS
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");


// cart array incoming
let incomingStock = JSON.parse(localStorage.getItem("incomingStock")) || [];
let productsAllNew = productsAll.concat(incomingStock);

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                ${item.price} SEK
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = productsAllNew.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

// save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}
updateCart();

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice.toFixed(2)} SEK`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

//=============================================================================
/*===== MIMMI: CART / CHECKOUT WINDOW =====*/
//=============================================================================

const checkoutBtn = document.querySelector(".checkout-msg-btn");

 checkoutBtn.addEventListener('click', (e)=> {
     e.preventDefault()
    window.location.href = "../html/checkout_msg.html";

    name.value = '';
    imgSrc.value = '';
    price.value = '';
    desc.value = '';

 });