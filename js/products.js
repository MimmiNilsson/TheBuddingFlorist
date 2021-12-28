// SELECT ELEMENTS
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const productsEl = document.querySelector(".products");

// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
    <div class="card">
        <div class="heart"></div>
                <img src="${product.imgSrc}" alt="${product.name}" style="width:100%">
                <h1 class="prod-h1">${product.name}</h1>
            <p class="prodprice">${product.price} SEK</p>
            <p class="desc"> ${product.desc}<p>
        <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button class="add">Add to Cart</button>
        </div>
    </div>
`;
  });
}
renderProducts(); 

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits(id);
  } else {
    const item = productsAll.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  // change number of units for an item
function changeNumberOfUnits(id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
}

// save cart to local storage
localStorage.setItem("CART", JSON.stringify(cart));
let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.numberOfUnits;
  });
totalItemsInCartEl.innerHTML = totalItems;
}

const heart = document.querySelectorAll(".heart");
const animationHeart = document.querySelectorAll(".animation-heart");

/*  console.log(animationHeart.classList); */

heart.forEach( (heart =>  { //heart fill color + animation-heart animation
  heart.addEventListener("click", () => {
  heart.classList.add('animation');
  heart.classList.toggle('fill-color');
  
  onclick.add
});
}))