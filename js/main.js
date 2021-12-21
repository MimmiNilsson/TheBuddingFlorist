  const heart = document.querySelectorAll(".heart");
  const animationHeart = document.querySelectorAll(".animation-heart");

  console.log(animationHeart.classList)

heart.forEach( (heart =>  { //heart fill color + animation-heart animation
    heart.addEventListener("click", () => {

     
    heart.classList.add('animation');
    heart.classList.toggle('fill-color');
    
  });
}))
