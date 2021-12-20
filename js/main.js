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
 
// fetch()
// res-urls 


const response = await fetch("https://api.unsplash.com/flowers/photos?query=office&per_page=3")
// fetch Unplash api och hämta random inom "flowers" bilder 

async function fetchPicture() {
   // hanterar vi promise
    response.json().then( res=> {  //callback function i promise som extraherar response
    // raw keys har bildadressen 
    const img = document.createElement("img");
    img.setAttribute("src", res.urls.large);
    img.setAttribute("alt", "pictures from unsplash")
    img.height="600"
    img.width="400"
    document.querySelector(".johanna").appendChild(img)
  })  
}

async function fetchImg() {
  const Urls="https://api.unsplash.com/photos/random?";
  const client_id="client_id=StO9sFglhemQt_JdSRJytAsx971OWI5FKJa9B2yDfO4"
  const response = await fetch(Urls+client_id);
  response.json().then( res=> console.log(res.urls.small))
}

document.querySelector("button").addEventListener("click", fetchImg) */

