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
    }
 } 

