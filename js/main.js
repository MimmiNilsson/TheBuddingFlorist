  const heart = document.querySelectorAll(".heart");
  const animationHeart = document.querySelectorAll(".animation-heart");


  console.log(animationHeart.classList)

heart.forEach( (heart =>  { //heart fill color + animation-heart animation
    heart.addEventListener("click", () => {

     
    heart.classList.add('animation');
    heart.classList.toggle('fill-color');
    
  });
})) 

/*
GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3
 */
