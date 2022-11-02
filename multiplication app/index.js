const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionEl=document.getElementById("heading");
const formEl=document.querySelector('.form');
const inputEl=document.querySelector('#input');
const scoreEl=document.querySelector('#score');
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`Score:${score}`;
const correctAns=num1*num2;
    

questionEl.innerText=`what is ${num1} multiply by ${num2}`;
formEl.addEventListener("submit",()=>{
    const userAns=+inputEl.value;
    if(userAns===correctAns){
       score+=1;
       updateScore();

    }
    else{
        score--;
        updateScore();
    }

})

function updateScore(){
    localStorage.setItem("score",JSON.stringify(score));

}

