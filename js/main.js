const heart = document.querySelector(".heart");
const animationHeart = document.querySelector(".animation-heart");

heart.addEventListener("click", () => {
  animationHeart.classList.add('animation');
  heart.classList.add('fill-color');
});


animationHeart.addEventListener("click", () => {
animationHeart.classList.remove("animation");
heart.classList.remove("fill-color");
})










/* försök ett hjärtfunktion
document.querySelector("#far fa-heart").addEventListener("click", favouriteHeart);

function favouriteHeart(){
if("#far fa-heart".clicked==true){
}
}
 */




/* försök två hjärtfunktion */
 /* let heart = document.getElementById("far fa-heart");
 heart.onclick = anotherHeart;

 function anotherHeart(){
//byter bild till ett ifyllt hjärta
  document.getElementById("far fa-heart").innerHTML = ("fas fa-heart");
 }
 */





/*försök till hjärtfunktionen
  const button = document.querySelector(".heartFunction");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
}); */











 










/*

GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3
 */



