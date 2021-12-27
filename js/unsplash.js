function SearchPhotos () {
    let client_id = "6yf5t5spIbfcpudUwkLl2SkoL86KmWElsYKptRDgDBY";
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/search/photos/?client_id=" +client_id+ "&query=" +query;
    
    //gör en request till API
    fetch(url)
        .then(function (data){
            return data.json();
        })
        .then(function(data){
            console.log(data);

            data.results.forEach(photo => {
                
                let result = `
                <img src="${photo.urls.full}">
                <a href="${photo.links.download}">
                `;
                
                $("#result").html(result);
            });
        });
}

/* GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3 */



















/* async function fetchPicture() {
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
document.querySelector("button").addEventListener("click", fetchImg) */

/*
GRUND URL
https://api.unsplash.com/photos/random/3
https://api.unsplash.com/photos/random/3${count};
https://api.unsplash.com/flowers/photos?query=office&per_page=3
 
// fetch()
// res-urls 
*/
//https://api.unsplash.com/flowers/photos?query=office&per_page=3



/* const input = document.getElementById("bild");
const grid = document.getElementsByClassName("unsplash")[0];


window.addEventListener("load", dayNightMode);

function loadImg(){
    removeImg();

    const url = "https://api.unsplash.com/search/photos/?query=flowers&per_page=3&client_id=6yf5t5spIbfcpudUwkLl2SkoL86KmWElsYKptRDgDBY"
    fetch (url)

    .then(Response =>{
        if(Response.ok)
            return Response.json();
            else
            alert(Response.status)
        })
    
    .then(data =>{
        const imageNodes =[];
        for (let i=0; i < data.results.length; i++){
            imageNodes[i] = document.createElement("div");
            imageNodes[i].className = "img";
            imageNodes[i].style.backgroundImage = "url";
            imageNodes[i].urls.raw +")";
            imageNodes[i].addEventListener("dblclick", function () {
                window.open(data.results[i].links.download,"_blank");
            })
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImg() {
    grid.innerHTML = "";
}

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.documentColor = "whitesmoke";
        document.body.style.color = "black";
    } else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
} */