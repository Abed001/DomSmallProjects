const mainContainer=document.querySelector(".container");

for(let i=0;i<30;i++){
    const makeDiv=document.createElement("div");
    //we use this to add a class
    makeDiv.classList.add("color-container");

    mainContainer.appendChild(makeDiv);}

    const colorContainerEls=document.querySelectorAll(".color-container")

    generateColors();
    function generateColors(){
        colorContainerEls.forEach((makeDiv)=>{
            const newColorCode=randomColor();
            makeDiv.style.backgroundColor="#"+newColorCode; 
            makeDiv.innerText="#"+newColorCode; 


            
        })
    }

    randomColor();

    function randomColor(){
        const chars="0123456789abcdef";
        const colorCodeLength=6;
        let colorCode="";
        for (let index = 0; index < colorCodeLength; index++) {
           const randomNum=Math.floor(Math.random()*chars.length);
            colorCode+=chars.substring(randomNum,randomNum+1);
          
        }
        return colorCode;
    }