
var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = []; //localStorage eller
    
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }

  // Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });






































/* var product=[];

function fun(){
  var x={};
  x.price=document.getElementById('price').value;
  x.title=document.getElementById('title').value;
  product.push(x);
    
  var iDiv = document.createElement('div');
  iDiv.id = product.length;
  iDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(iDiv);
  
  var para = document.createElement("span");
  var node = document.createTextNode('Title: ' + x.title+' |                    ');
  para.appendChild(node);

  var element = document.getElementById(product.length);
  element.appendChild(para);
  
  para = document.createElement("span");
  node = document.createTextNode('Price: '+ x.price);
  para.appendChild(node);
  
  element.appendChild(para);
}

Title:<input id="title" type="text">
Price:<input id="price" type="number">
<button onClick="fun()">Add to Cart </button>

<div>
<p><b>Cart Info</b></p>
</div> */