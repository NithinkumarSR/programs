'use strict'
// const a=10;
// const b=20;
// console.log(a+b);
//  console.log(20/10);
//  console.log(10*b);
//  const fristName='hi';
//  const lastName='hello';
//  console.log(fristName,lastName);
//  console.log(`${fristName} java `);
//  let x=10+5;
//  x+=10;
//  console.log(x);
//  let  a=5;
//  console.log(a**2);
// console.log(b<a);
// console.log(b>a);
// console.log(b>=20);
// let name$='hi';
// console.log(fristName+lastName);
// console.log(fristName,lastName);
// console.log(fristName+' '+lastName);
     // problem
// let weight=78;
// let heigth=1.69;
// let bmi=(weight/heigth)**2;
// let weight1=92;
// let heigth1=1.95;
// let bmi1=(weight1/heigth1)**2;
// let a=bmi>bmi1;
// console.log(a);
// let weight=95;
// let heigth=1.88;
// let bmi=(weight/heigth)**2;
// let weight1=85;
// let heigth1=1.76;
// let bmi1=(weight1/heigth1)**2;
// let a=bmi>bmi1;
// console.log(a);
           //string
// const a='nithin\n\kumar';
// console.log(a);
// const b=`hi
// hello`;
// console.log(b);
        //if condition
//  const age=15;
//  const x=age>=18;
//  if(x){
//     console.log(`age greater than ${age}`);
//  }  
//  else{
//     console.log(`age less than 18`);
//  }
// const a=1000;
// let b;
// if(a>= 1000){
//     b=1;
// }
// else{
//  b=2;
// }
// console.log(b);
           // problem
// const student1= 'Mark';
// const student2='John';
// let mark1=80;
// let mark2=90;
// if(mark1<mark2){
//     console.log(`'${student2}' BMI (${mark2})is higher than '${student1}'(${mark1})`);
// }
// else{
//     console.log(`'${student1}' BMI (${mark1})is higher than '${student2}'(${mark2})`);
// }
// let a='1789';
// console.log(Number(a)+1);
// console.log(a+1);
// a=Number(a);
// console.log(a+2);
// console.log(Number('hi'));
// console.log(typeof NaN);
// let b=1;
// b=String(b);
// console.log(typeof b);
// console.log(Number(b),b);
           // truthy and falsy
// let x;
// if(x){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
          //=== vs==
//   const a=10;
//   const b='10';
//   if(a===b){
//     console.log("true");
//   } 
//   else{
//     console.log("false");
//   }
//   if(a==b){
//     console.log("true");
//   }
//   else{
//     console.log("false");
//   }
        //prompt it take only string input
// let a=prompt("enter the number");
// if(a==5){
//     console.log("correct number");
// }
// else{
//     console.log("not correct number");
// }
// let a=Number(prompt("enter the number"));
// if(a===5){
//     console.log("5 correct number");
// }
// else if(a===6){
//     console.log("6 correct number");
// }
// else{
//     console.log("not correct number");
// }
// if(a!==5){
// console.log("not correct number");
//}
// let a=prompt("enter the number");
// if(a!=5){
//     console.log("not anumber");
// }
            // && vs ||  vs!
// const a=true;
// const b=true;
// console.log("and operator"+(a && b));
// console.log("or operator"+a || b);
// console.log("not operator"+!a); // not operator check it is false to print true;
             //problem
// let dolphins=(96+108+89)/3;
// let koalas=(88+91+110)/3;
// console.log(dolphins,koalas);
// if(dolphins>koalas){
//     console.log("dolphin is winner"); // ans
// }
// else if(dolphins===koalas){
//     console.log("match is draw");
// }
// else{
//     console.log("koalas is winner");
// }   
         //swtich
// const a =10;
// switch(a){
//     case 5:
//         console.log("a is 5");
//         break;
//     case 10:
//         console.log("a is 10");
//         break;
//     default:
//         console.log("not equal") 
// }
       // ternary operator
    // const a=18;
    // a>=18 ?console.log("true"):console.log("false");
    // const b=98;
    // const c=b>=18 ? 'greater':'smaller';
    // console.log(c);
//  const bill=275;
//  const tip=bill<=300 && bill>=15? bill*0.15:bill*0.2;
//  const  total_bill=bill+tip;
//  console.log(`The bill was ${bill}, the tip was ${tip},and total value ${total_bill}`);
              //function
// let h=window.prompt("enter");
// let g=window.prompt("enter")

// function run(a,b){
//       let c=(`hi ${a} hello ${b}` );
//       return c;
// }
// console.log(run(h,g));
// let res=(run(1,2));
// console.log(res);
  
//   function cal(){
//         let age=prompt("eneter the age");
//         const a=2021-age;
//         return a;
//   }
//   console.log(cal()); //  1991 ans 30
// function calage1(brithdate){
// return 2037-brithdate;
// }
// const age1=calage1(1991);
//  const calage2=function(brithdate){
//         return 2037-brithdate;
//  }
//  const age2=calage2(1991);
//  console.log(age1,age2); // ans 46 46
                 //Arrow function
// const cal=(brithyear)=>2023-brithyear;
// console.log(cal(2004));
// const yearsretriment=(brithyear)=>{
//         const age=2023-brithyear;
//         const retrimentage=65-age;
//         return retrimentage;
// }
// const year=window.prompt("enter the brith year");
// console.log(yearsretriment(year));   
// const student=(id,name1)=>` the student  is ${name1} and his id is ${id}`;
// console.log(student(window.prompt("student name"),window.prompt("student id")));
//   const calage=(brithyear)=>2023-brithyear;
//   const retriment=function(brithyear,name){
//         const age=calage(brithyear);
//         const retrimentage=65-age;
//         if(retrimentage>0){
//                 let a= retrimentage;
//         }
//         else{
//                 let a= "retried";
//         }
//         return`my retrimentage is ${retrimentage} and my name is ${name}`;
//   }
//   console.log(retriment(window.prompt("brithyear"),window.prompt("name")));
                 // 38 problem;
//                  let x,y;
//     const result=function(a,b){
//         console.log(a,b);
//         if((a*2)<=b){
//          return "team b is winner"; 
//         }
//         else{
//                 return " team a is winner";
//         }
              
//     }
// // 
// const a=(a1,a2,a3) =>(a1+a2+a3)/3;
// const b=(b1,b2,b3) =>(b1+b2+b3)/3;
// 0
// // function b(b1,b2,b3){
// //        y= (b1+b2+b3)/3;
// //         return y;
// //         }

// const a1=Number(window.prompt("enter the a score"));
// const a2=Number(window.prompt("enter the a score"));
// const a3=Number(window.prompt("enter the a score"));
// const b1=Number(window.prompt("enter the b score"));
// const b2=Number(window.prompt("enter the b score"));
// const b3=Number(window.prompt("enter the b score"));
// console.log(result(a(a1,a2,a3),b(b1,b2,b3)));
                         // problem 41
// const tiparr=[];
// const total=[];
//         const caltip=function (b){
//      const tip=b>=50 && b<=300?b*(15/100):b*(20/100);
//     tiparr.push(tip);
//     const x=b+tip;
//     total.push(x);
// }
// const arr=[125,555,44];
// caltip(arr[0]); 
// caltip(arr[1]);
// caltip(arr[arr.length-1]);
// console.log(tiparr);
// console.log(total);
                           // problem 45
// const mark={
//         name:'mark',
//         weight:78,
//         heigth:1.69,
//         calBMI:function(){
//          return (this.weight/this.heigth)*2;
//         }
// };
// const john={
//         name:'john',
//         weight:92,
//         heigth:1.95,
//         calBMI:function(){
//                 return (this.weight/this.heigth)*2;
//                }
// };
// if(mark.calBMI()>john.calBMI){
//         console.log(`${mark.name}BMI(${mark.calBMI()}) is higher than ${john.name}(${john.calBMI()})`);
// }
// else{
//         console.log(`${john.name}BMI(${john.calBMI()}) is higher than ${mark.name}(${mark.calBMI()})`);   
// }
                       //problem 50
// const tip=[];
// const totaltip=[];
// const caltip=function(a){
//  const b=a>=60 && a<=300?a*(15/100):a*(20/100);
//  tip.push(b);
//  let x=b+a;
//  totaltip.push(x);
// }
// const bill=[22,295,176,440,37,105,10,1100,85,52];
// for(let i=0;i<bill.length;i++){
//         caltip(bill[i]);
// }
// console.log(tip);
// console.log(totaltip);