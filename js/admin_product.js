const productString= localStorage.getItem("incomingStock");

const productList = JSON.parse(productString);
console.log(productList)
productList.map( (product)=> {
    document.querySelector("div").innerHTML += "<div>" + product.productName +"</div>" 
    + "<img src=" + product.img+ "  alt='image should be shown here' class='product-img'>";
})