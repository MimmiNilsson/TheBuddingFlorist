//=============================================================================
/*===== MIMMI: CHECKOUT MESSAGE =====*/
//=============================================================================

const returnCheckoutBtn = document.querySelector(".back-checkout-btn");

 returnCheckoutBtn.addEventListener('click', (e)=> {
     e.preventDefault()
    window.location.href = "../html/cart.html";
 });