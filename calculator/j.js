
// // document.getElementById('btn').onclick=function(){
// //     let c=0;
// //     console.log("va");
// //     let a=document.ge("button1").value;
// //     document.getElementsByClassName("label1").innerHTML=a;
// // }
// // let aa;
// function func(){
//     // console.log("va");
// //    let  aa=10;
//     let a=document.getElementById("btn").value;
//     document.getElementById("label1").innerHTML=a;
//     // return aa;
// }
// // let b=func();
// console.log(b);
let b='';
let res='';
function bt9(){
    let a=document.getElementById("b9").value;
    b+=a;

    document.getElementById("display").innerHTML=b;
}
function bt8(){
    let a=document.getElementById("b8").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt7(){
    let a=document.getElementById("b7").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}

function btA(){
    let a=document.getElementById("b+").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt6(){
    let a=document.getElementById("b6").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt5(){
    let a=document.getElementById("b5").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function btS(){
    let a=document.getElementById("b-").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt4(){
    let a=document.getElementById("b4").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt3(){
    let a=document.getElementById("b3").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt2(){
    let a=document.getElementById("b2").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function btM(){
    let a=document.getElementById("b*").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt1(){
    let a=document.getElementById("b1").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function bt0(){
    let a=document.getElementById("b0").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function btP(){
    let a=document.getElementById("b.").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
function btD(){
    let a=document.getElementById("b/").value;
    b+=a;
    document.getElementById("display").innerHTML=b;
}
let arr=[];
function ans(){
   arr=b.split(/[+=*%]/);
   let res=Number(arr[0]);
   console.log(res);
   let j=0;
   for(let i=0;i<b.length;i++){
    if(b.charAt(i)=='+'){
        j++;
      res=res+Number(arr[j]);
    }
    else if(b.charAt(i)=='*'){
        j++;
        res=res*Number(arr[j]);
      }
     else if(b.charAt(i)=='-'){
        j++;
        res=res-Number(arr[j]);
      }
      else if(b.charAt(i)=='/'){
        j++;
        res=res/Number(arr[j]);
      }
      else{
        continue;
      }
   }
   document.getElementById("display").innerHTML=res;
   console.log(res);
}
function btC(){
    document.getElementById("display").innerHTML=0;
    b='';
    arr.splice(0,arr.length);
    x=0;
}

//.