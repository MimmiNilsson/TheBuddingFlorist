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

// ADD TO fav
function addToFav(id) {
  // check if product already exist in fav
  if (fav.some((item) => item.id === id)) {
    fav = fav.filter((item) => item.id !== id);
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
  localStorage.setItem("FAV", JSON.stringify(fav));
}

function removeItemFromFav(id) {
    fav = fav.filter((item) => item.id !==id); 
    updateFav(); 
}