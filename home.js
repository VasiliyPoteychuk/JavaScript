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

// HOMEWORK 24/05

// //Задача 1
// function getRadius() {
//     return 2 * Math.PI * r;
// }
// let r = +prompt ('Введите радиус окружности');
// let length = getRadius(r);
// console.log(length);


// //Задача 2
// function getPrice() {
//     return (price - (price / 100 * 3.5));
// }
// let price = +prompt('стоимость товара');
// let exit = getPrice(price);
// console.log(exit.toFixed(2));

// //Задача 3
// function getMin(a, b) {
//     return Math.min(a, b);
// }
// let getNumb = getMin( 6, 1)
// console.log(getNumb);

// Homework 28.08

//1

// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// let space = 1;
// for (let i = 0; i < str.length; i++){
//     if(str[i] == ' '){
//         space++
//     }
// }
// console.log('В строке ' + space + ' символов');
// console.log(str.replaceAll('a', 'ab'));

//2
   
// let str = '123456789';
// for (let i = str.length; i > 0; i= i-3){
//         str = str.replace(i , i +' ')   
// }
// console.log(str);

//3

// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// let n = 0;
// for (let i = 0; i < str.length; i++){
//   if( str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' || str[i] == '6' || str[i] == '7' || str[i] == '8' || str[i] == '9' || str[i] == '0' ){
//     n = n + 1;
//   }
// }
// console.log(n);

// 4

// let str = 'Lorem ipsum dolor  sit amet, consectetur'
// let newStr = '';
// for(let i = str.length -1; i >= 0; i--){
//   newStr = newStr + str[i] // newStr +=str[i]
// }
// console.log(newStr);

//5

// let word = 'abcddcba';
// let newWord = '';
// for (let i = word.length -1; i >= 0; i--){
//   newWord = newWord + word[i]
// }if(word == newWord){
//   console.log(true);
// }else{
//   console.log(false);
// }
//или
// console.log(word.localeCompare(newWord));


//6

let str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
