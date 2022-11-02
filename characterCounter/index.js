const textareaEl=document.getElementById("textarea");

const totalcount=document.getElementById("total-counter");

const remainingcount=document.getElementById("remaining-counter");



textareaEl.addEventListener("keyup",()=>{
updateCounter();

})

function updateCounter(){
    totalcount.innerText=textareaEl.value.length;
    remainingcount.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
    
    }

