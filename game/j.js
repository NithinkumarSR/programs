'use strict'
console.log(document.querySelector('.input').value);
document.querySelector('.check').addEventListener('click',function(){
    let a=document.querySelector('.input').value;
    if(ran==a){
        document.querySelector('#ans').value=ran;
    }
});
let ran;
document.querySelector('#again').addEventListener('click',function(){
     ran=Math.trunc(Math.random()*6)+1;
})


