'use strict'
let s=document.querySelector('#score').textContent;
document.querySelector('.check').addEventListener('click',function(){
    let a=document.querySelector('.input').value;
    
 console.log(s);
    if(a==ran){
        document.querySelector('.dis').textContent=''
        document.querySelector('.s').innerHTML='win the game';
    }
    else if(s==0){
        document.querySelector('.dis').textContent=''
        document.querySelector('.s').innerHTML='Lose the game';
    }
    else if(a>ran){
        document.querySelector('.dis').textContent='very large input' 
    }
    else {
        document.querySelector('.dis').textContent='very small input'
    }
    console.log("hi"+ran);
    if(ran==a){
        document.querySelector('#ans').value=ran;
        let n1=document.querySelector('#high').textContent;
        if(Number(n1)<Number(s)){
        document.querySelector('#high').innerHTML=s;
    }
}
    else{
        document.querySelector('#ans').value='-?-';
        document.querySelector('#score').innerHTML=s--;
    }

});
let ran;
document.querySelector('#again').addEventListener('click',function(){
     ran=Math.trunc(Math.random()*20)+1;
     document.querySelector('#score').innerHTML='20';
     s=document.querySelector('#score').textContent;
     document.querySelector('.input').value=0;
     document.querySelector('.s').innerHTML='';
    }
)


