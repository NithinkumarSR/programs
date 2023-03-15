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
const hide=function(){
  para.classList.add('hidden');
 };
 document.querySelector('.para').addEventListener('click',function(){
  hide();
 });
document.addEventListener('keydown',function(e){
  if(e.key==="Enter"){
    if(!para.classList.contains('hidden')){
      hide();
    }
  }
})
