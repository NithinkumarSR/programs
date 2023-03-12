const a=document.querySelectorAll('.modal');
let i;
for(i=0;i<a.length;i++){
a[i].addEventListener('click',function(){
   let x=document.querySelector('.para');
 x.classList.remove('hidden');
});
}
// document.querySelector('over').addEventListener('click',function(){
//     let x=document.querySelector('.para');
//     x.classList.add('hidden');
// });
const body=document.querySelector('html');
const para=document.querySelector('.para');
para.addEventListener('click',function(){
 para.classList.add('hidden');
 console.log("hi");
})