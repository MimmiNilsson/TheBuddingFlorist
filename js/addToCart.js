let carts = document.querySelectorAll("button");
let products =[ {
    name: "Snowfall Bouquet"
    /* tag:""
    price: ""
    inCart: 0,  */}
]



for (let i=0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1);

}