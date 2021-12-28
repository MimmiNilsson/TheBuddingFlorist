// SELECT ELEMENTS
const favItemsEl = document.querySelector(".fav-items");
const subtotalEl = document.querySelector(".subtotal");
// const totalItemsInFavEl = document.querySelector(".total-items-in-fav");

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
            </button>
        </div>
      `;
  });
}

// fav array
let fav = JSON.parse(localStorage.getItem("FAV")) || [];
updateFav();

// ADD TO fav
function addToFav(id) {
  // check if product already exist in fav
  if (fav.some((item) => item.id === id)) {
  }else{
    const item = productsAll.find((product) => product.id === id);

    fav.push({
      ...item
    });
  }
  updateFav();
}

// update fav
function updateFav() {
  renderFavItems();

// save fav to local storage
  localStorage.setItem("Fav", JSON.stringify(fav));
}

function removeItemFromFav(id) {
    fav = fav.filter((item) => item.id !==id); 
    updateFav(); 
} 
/*
// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  fav.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice.toFixed(2)} SEK`;
  totalItemsInFavEl.innerHTML = totalItems;
}

// remove item from fav
function removeItemFromfav(id) {
  fav = fav.filter((item) => item.id !== id);

  updatefav();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  fav = fav.map((item) => {
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

  updateFav();
} */