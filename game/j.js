'use strict'
console.log(document.querySelector('.input').value);
document.querySelector('.check').addEventListener('click',function(){
    let a=document.querySelector('.input').value;
    document.querySelector('#ans').value=a;
});
function ran(){
}
// console.log(ran());
document.querySelector('#again').addEventListener('click',function()
{
    (Math.trunc(Math.random()*6)+1);

});
    

