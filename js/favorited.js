// SELECT ELEMENTS
const favItemsEl = document.querySelector(".fav-items");
const totalItemsInFavEl = document.querySelector(".total-items-in-fav");

// render fav items
function renderFavItems() {
  favItemsEl.innerHTML = ""; // clear fav element
  fav.forEach((item) => {
    favItemsEl.innerHTML += `
        <div class="fav-item">
            <div class="item-info" onclick="removeItemFromFav(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                ${item.price} SEK
            </div>
            <button class="fav-to-cart" title="add to cart" onclick="addToCart(${item.id})">
              Add to cart
            </button>
        </div>
      `;
  });
}

// fav array
let fav = JSON.parse(localStorage.getItem("FAV")) || [];
updateFav();


/////////////
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
////////////

// update fav
function updateFav() {
  renderFavItems();

// save fav to local storage
  localStorage.setItem("FAV", JSON.stringify(fav));
}

// remove item from cart
function removeItemFromFav(id) {
  fav = fav.filter((item) => item.id !== id);

  updateFav();
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