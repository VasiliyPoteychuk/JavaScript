// "use strict"

// // let a = +prompt ('enter first number');
// // let b = +prompt ('enter second number');
// // let c = +prompt ('enter third number');
// // if( a > 10 && b > 10 && c > 10 && a % 3 == 0 && b % 3 == 0){
// //     alert ('yes');
// // }else{
// //     alert ('no');
// // }// первая задача

// // let n = +prompt('enter number');
// // if (n >= 2 && n <= 5){
// //     n=n*10;
// // }else if (n >=7 && n <= 40){
// //     n=n/100;
// // }else if (n <=0 && n >= 3000){
// //     n=n*3;
// // }else(n = n)
// // console.log(n);//вторая задача

// // let p = 1;
// // for (let n = 5; n < 111; n++){
// //     p = n * p
// //     console.log(p);
// // }//3 задача

// // for (let n = 1; n < 10 ; n++){
// //     if (n%2){
// //         console.log('*******');
// //     }else{
// //         console.log('****');
// //     }
// // }//4 задача

// // let n = +prompt('enter number');
// // let b = 0;
// // for (let a = 1; a <= n; a++){
// //     b = b + a;
// //     console.log(b);
// // }//5 задача

// let n = +prompt (' Введите колличество строк ');
// let m = +prompt (' Введите колличество столбцов');
// for ( let a = 1 ; a <= n ; a++){
//     let s = "";
//     for (let b = 1 ; b <= m ; b++){
//         if ( a%2==0 && b%2!=0 || a%2!=0 && b%2==0){
//             s = s + 'BBB';    
//         }else{
//             s = s + 'AAA';
//         }
//     }
//     console.log(s);
// }// задача 1

// let n = +prompt ('Введите колличество строк');
// let m = n*2;
//     for ( let a =1; a <= n; a++){
//         let s = "";
//         for ( let b = 1; b <=m; b++){
//             if(a == 1 || a == n || b == 1 || b == m){
//                 s = s + "A"; 
//             }else{
//                 s = s + "B"
//             }
//         }
//         console.log(s);
//     }//задача 2

// let a = Math.random() * (100024 - 578) + 578;
//  a = Math.round(a);
//  let b = Math.random() * (100024 - 578) + 578;
//  b = Math.round(b);
//  let c = Math.random() * (100024 - 578) + 578;
//  c = Math.round(c);
//  if(a != b && a != c && b != c){
//     console.log(a,b,c);
//  }//задача 3

// let a = 4;
// let b = -2;
// let c = 5;
// let d = 19;
// let e = -130;
// let f = 0;
// let g = 10;
// console.log(Math.min(a, b, c, d, e, f, g), Math.max(a, b, c, d, e, f, g));
// задача 4

// let a = +prompt ('enter first number');
// let b = +prompt ('enter second number');
// console.log(Math.abs(a - b));// задача 5

// let c = +prompt('Введите ширину треугольника ');
// let r =  (c - 1) /2 +1;
// if (c%2 ==0){
//     console.log(NaN);
// }else{
//     for ( let a = 1; a <=r; a++){
//         let s = "";
//         for ( let b = 1; b <= c; b++){
//             if( b <= r - a  || b>=r+a){
//                 s = s + "-";
//             }else {
//                 s = s + "+";
//             }
//         }
//         console.log(s);
//     }
// }//задача 6 Ёлочка
