const heart = document.querySelectorAll(".heart");
const animationHeart = document.querySelectorAll(".card");

window.addEventListener("load", () =>{
  card.forEach(card => {
    card.addEventListener("click", () =>{
      card.classList.add("animation");
    })
  });
})






/* 
  const heart = document.querySelectorAll(".heart");
  const animationHeart = document.querySelectorAll(".animation-heart");


heart.forEach( (heart =>  { //heart fill color + animation-heart animation
    heart.addEventListener("click", () => {
    animationHeart.classList.add('animation');
    heart.classList.add('fill-color');
  });
})) 
/* 
heart.forEach( (heart =>  { //heart fill-color + animation-heart
  animationHeart.addEventListener("click", () => {
  heart.classList.add('animation');
  heart.classList.add('fill-color');
});
}))  

animationHeart.addEventListener("click", () => {
animationHeart.classList.remove("animation");
heart.classList.remove("fill-color");
})  
 
 



/* 
function myFunction(x) {
  x.classList.toggle.style.color = "red";

} */



/*
GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3
 */
