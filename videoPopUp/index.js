const buttonEl=document.querySelector(".btn");
const closeEl=document.querySelector(".close-icon");
const trailerContainerEl=document.querySelector(".trailer-container");
const videoEl=document.querySelector("video");

buttonEl.addEventListener("click",()=>{
trailerContainerEl.classList.remove("active");

})

closeEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
    
    })
    

