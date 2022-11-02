const btEln=document.querySelector(".btn");
btEln.addEventListener("mouseover", (event)=>{
    const x=event.pageX - btEln.offsetLeft;
    const y=event.pageY - btEln.offsetTop;

    btEln.style.setProperty("--Posx",x +"px");
    btEln.style.setProperty("--Posy",y +"px");
});

