window.addEventListener('load', () => {
document.querySelector("#makeItSnow").addEventListener("click", grinchin);})

const grinch = document.querySelector('#makeItSnow');

 function grinchin() {
    if(this.style.backgroundColor === "brown"){
    grinch.style.backgroundColor = "green";
    grinch.value = "Be A Grinch: ";
    
} else {
        this.style.backgroundColor = "brown"; 
        grinch.value = "Make It Snow: ";
        remove.dontBeAgrinch();
    }
 } 


/*function colorText()
 {
     // If-satsen testar vilken färg det är på elementet som vi klickar på
     if(this.style.backgroundColor == "brown")
     {
         // Om textfärgen är röd, så ändrar vi den till svart
         this.style.backgroundColor = "green"; 
     }
     else
     {
         // Om textfärgen inte är röd, så ändrar vi den till röd
         this.style.color = "brown"; 
     }
 } 
  
 function init()
 {
     // Hämtar och sparar alla element som har klassen "text" (som en array)
     var text = document.getElementsById("#makeItSnow");
      
     // Loopar igenom alla element med klassen "text" och lägger på event-handern "onclick"
     for(var i = 0; i < text.length ;i++)
     {
         text[i].onclick = backgroundColorText;
     }
 }
  
 window.onload = init;












 // If the user clicks in the window, set the background color of <body> to yellow
function grinchin() {
    if (grinch === clicked) {
        grinch.style.backgroundColor = 'green';
        grinch.style.Text = 'Be a Grinch: ';
    }
  else{
    createSnowFlake.remove();
  }} */
