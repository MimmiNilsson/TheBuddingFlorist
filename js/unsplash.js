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



const response = await fetch("https://api.unsplash.com/search/photos?query=flowers&per_page=3")
// fetch Unplash api och hämta random inom "flowers" bilder 
document.querySelector("button").addEventListener("click", fetchImg)

/*
GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3
 
// fetch()
// res-urls 
*/
//https://api.unsplash.com/flowers/photos?query=office&per_page=3