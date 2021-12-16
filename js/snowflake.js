window.addEventListener('load', () => {
    console.log(document.querySelector("#makeItSnow"))
    document.querySelector("#makeItSnow").addEventListener("click", dontBeAgrinch);})

function dontBeAgrinch() {

    const body = document.body;
    setInterval(createSnowFlake, 100);

    function createSnowFlake() {
        const snow_flake = document.createElement('i');
        snow_flake.classList.add('far');
        snow_flake.classList.add('fa-snowflake');
        snow_flake.style.right = Math.random() * window.innerWidth + 'px';
        snow_flake.style.animationDuration = Math.random() * 25 + 15 + 's'; 
        snow_flake.style.opacity = Math.random();
        snow_flake.style.fontSize = Math.random() * 10 + 5 + 'px';

        document.body.appendChild(snow_flake);

       

        setTimeout(() => {
            snow_flake.remove();
        }, 12500)
    }}


   /*  animationHeart.forEach( anim => {
        anim.classList.add('animation');

      }) */
   

/* 
    function removeSnowFlake() {
        const body = document.body;
        setInterval(removeIgen, 100);
    
        function removeIgen() {
            const snow_flake = document.createElement('i');
            snow_flake.classList.add('far');
            snow_flake.classList.add('fa-snowflake');
            snow_flake.style.right = null;
            snow_flake.style.animationDuration = null; 
            snow_flake.style.opacity = null;
            snow_flake.style.fontSize = null;
    
            document.body.appendChild(snow_flake);
    
           
    
            setTimeout(() => {
                snow_flake.remove();
            }, null)
        }} */