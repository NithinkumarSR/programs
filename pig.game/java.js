'use strict'
let c=0;
let res=0;
let ch=0;
document.querySelector('.n').addEventListener('click',function(){
    document.querySelector('.d1').textContent=0;
    document.querySelector('.d2').textContent=0;
    document.querySelector('.b').classList.add('hidden');
})
let x,y,z;
y='.d1'
z='.c1'
document.querySelector('.h1').addEventListener('click',function(){
    c=0;
     let sum=Number(document.querySelector(y).textContent)+Number(res);
  document.querySelector(y).textContent=sum;
  console.log(document.querySelector(y).textContent);
  document.querySelector('.c1').textContent=0;
  document.querySelector('.c2').textContent=0;
  if(ch===1){
    console.log("ch");
    y='.d1'
    z='.c1'
    ch=0;
    res=0;
}
else{
    console.log("cgt");
    y='.d2';
    z='.c2';
    ch=1;
    res=0;
}
})
const inc=function(){
  let c=Math.trunc(Math.random()*4)+1;
  res+=Number(c) ;
  let sh;
   document.querySelector(z).innerHTML=res;
//    if(document.querySelector('.v').classList.contains('hidden')){
//     document.querySelector('.v').classList.remove('hidden');
//    }
//    if(c==1){
//     document.querySelector('.i1').classList.remove('hidden');
    
//    }
//    else if(c==2){
//     // document.querySelector('.b').classList.add('hidden');
//    document.querySelector('.i2').classList.add('hidden');
  
//    }
//    else {
//     document.querySelector('.i3').classList.add('hidden');
//    }
   
//     // document.querySelector('.v').classList.add('hidden')
if(c==1){
    if(!document.querySelector('.b').classList.contains('hidden')){
        document.querySelector('.b').classList.add('hidden');
    }
       document.querySelector('.i1').classList.remove('hidden');
} 
if(c==2){
    if(!document.querySelector('.b').classList.contains('hidden')){
        document.querySelector('.b').classList.add('hidden');
    }
    document.querySelector('.i2').classList.remove('hidden');
}
if(c==3){
    if(!document.querySelector('.b').classList.contains('hidden')){
        document.querySelector('.b').classList.add('hidden');
    }
    document.querySelector('.i3').classList.remove('hidden');
}
if(c==4){
    if(!document.querySelector('.b').classList.contains('hidden')){
        document.querySelector('.b').classList.add('hidden');
    }
    document.querySelector('.i4').classList.remove('hidden');
}
}
document.querySelector('.r1').addEventListener('click',inc);
