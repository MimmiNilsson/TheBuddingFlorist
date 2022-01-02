// SELECT ELEMENTS
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
const productsEl = document.querySelector(".products");

// Itemst that we add from admin, and concat it with our array we already had
incomingStock = JSON.parse(localStorage.getItem("incomingStock")) || [];
let productsAllNew = incomingStock.concat(products); //new items pushes in att the top of the array

// RENDER PRODUCTS
function renderProducts() {
  productsAllNew.forEach((product) => {
    productsEl.innerHTML += `
    
    <div class="card">
        <div class="heart" onclick="togglefav(${product.id})"></div>
                <img src="${product.imgSrc}" alt="${product.name}" style="width:100%">
                <h1 class="prod-h1">${product.name}</h1>
            <p class="prodprice">${product.price} SEK</p>
            <p class="desc"> ${product.desc}<p>
        <div class="add-to-cart" onclick="addToCart(${product.id})">
            <button class="add">Add to Cart</button>
        </div>
    </div>
    </div>
`;
  });
}
renderProducts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
let fav = JSON.parse(localStorage.getItem("FAV")) || [];

//add to fav
function togglefav(id) {
   // check if product already exist in fav
  if (fav.some((item) => item.id === id)) {
    fav = fav.filter((item) => item.id !== id);
  } else {
    const item = productsAllNew.find((product) => product.id === id);

    fav.push({
      ...item
    });
  }
    localStorage.setItem("FAV", JSON.stringify(fav));
}

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits(id);
  } else {
    const item = productsAllNew.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
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

const heart = document.querySelectorAll(".heart");
const animationHeart = document.querySelectorAll(".animation-heart");

/*  console.log(animationHeart.classList); */

heart.forEach( (heart =>  { //heart fill color + animation-heart animation
  heart.addEventListener("click", () => {
  heart.classList.add('animation');
  heart.classList.toggle('fill-color');
  localStorage.setItem("FAV", JSON.stringify(fav));
  /* toggle favorits */
});
}))