// // "use strict"

// // // let a = +prompt ('enter first number');
// // // let b = +prompt ('enter second number');
// // // let c = +prompt ('enter third number');
// // // if( a > 10 && b > 10 && c > 10 && a % 3 == 0 && b % 3 == 0){
// // //     alert ('yes');
// // // }else{
// // //     alert ('no');
// // // }// первая задача

// // // let n = +prompt('enter number');
// // // if (n >= 2 && n <= 5){
// // //     n=n*10;
// // // }else if (n >=7 && n <= 40){
// // //     n=n/100;
// // // }else if (n <=0 && n >= 3000){
// // //     n=n*3;
// // // }else(n = n)
// // // console.log(n);//вторая задача

// // // let p = 1;
// // // for (let n = 5; n < 111; n++){
// // //     p = n * p
// // //     console.log(p);
// // // }//3 задача

// // // for (let n = 1; n < 10 ; n++){
// // //     if (n%2){
// // //         console.log('*******');
// // //     }else{
// // //         console.log('****');
// // //     }
// // // }//4 задача

// // // let n = +prompt('enter number');
// // // let b = 0;
// // // for (let a = 1; a <= n; a++){
// // //     b = b + a;
// // //     console.log(b);
// // // }//5 задача

// // let n = +prompt (' Введите колличество строк ');
// // let m = +prompt (' Введите колличество столбцов');
// // for ( let a = 1 ; a <= n ; a++){
// //     let s = "";
// //     for (let b = 1 ; b <= m ; b++){
// //         if ( a%2==0 && b%2!=0 || a%2!=0 && b%2==0){
// //             s = s + 'BBB';    
// //         }else{
// //             s = s + 'AAA';
// //         }
// //     }
// //     console.log(s);
// // }// задача 1

// // let n = +prompt ('Введите колличество строк');
// // let m = n*2;
// //     for ( let a =1; a <= n; a++){
// //         let s = "";
// //         for ( let b = 1; b <=m; b++){
// //             if(a == 1 || a == n || b == 1 || b == m){
// //                 s = s + "A"; 
// //             }else{
// //                 s = s + "B"
// //             }
// //         }
// //         console.log(s);
// //     }//задача 2

// // let a = Math.random() * (100024 - 578) + 578;
// //  a = Math.round(a);
// //  let b = Math.random() * (100024 - 578) + 578;
// //  b = Math.round(b);
// //  let c = Math.random() * (100024 - 578) + 578;
// //  c = Math.round(c);
// //  if(a != b && a != c && b != c){
// //     console.log(a,b,c);
// //  }//задача 3

// // let a = 4;
// // let b = -2;
// // let c = 5;
// // let d = 19;
// // let e = -130;
// // let f = 0;
// // let g = 10;
// // console.log(Math.min(a, b, c, d, e, f, g), Math.max(a, b, c, d, e, f, g));
// // задача 4

// // let a = +prompt ('enter first number');
// // let b = +prompt ('enter second number');
// // console.log(Math.abs(a - b));// задача 5

// // let c = +prompt('Введите ширину треугольника ');
// // let r =  (c - 1) /2 +1;
// // if (c%2 ==0){
// //     console.log(NaN);
// // }else{
// //     for ( let a = 1; a <=r; a++){
// //         let s = "";
// //         for ( let b = 1; b <= c; b++){
// //             if( b <= r - a  || b>=r+a){
// //                 s = s + "-";
// //             }else {
// //                 s = s + "+";
// //             }
// //         }
// //         console.log(s);
// //     }
// // }//задача 6 Ёлочка

// // HOMEWORK 24/05

// // //Задача 1
// // function getRadius() {
// //     return 2 * Math.PI * r;
// // }
// // let r = +prompt ('Введите радиус окружности');
// // let length = getRadius(r);
// // console.log(length);


// // //Задача 2
// // function getPrice() {
// //     return (price - (price / 100 * 3.5));
// // }
// // let price = +prompt('стоимость товара');
// // let exit = getPrice(price);
// // console.log(exit.toFixed(2));

// // //Задача 3
// // function getMin(a, b) {
// //     return Math.min(a, b);
// // }
// // let getNumb = getMin( 6, 1)
// // console.log(getNumb);

// // Homework 28.08

// // 1

// // let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// // let space = 1;
// // for (let i = 0; i < str.length; i++){
// //     if(str[i] == ' '){
// //         space++
// //     }
// // }
// // console.log('В строке ' + space + ' символов');
// // console.log(str.replaceAll('a', 'ab'));

// // 2
   
// // let str = '123456789';
// // for (let i = str.length; i > 0; i= i-3){
// //         str = str.replace(i , i +' ')   
// // }
// // console.log(str);

// // // 3

// // let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// // let n = 0;
// // for (let i = 0; i < str.length; i++){
// //   if( str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' || str[i] == '6' || str[i] == '7' || str[i] == '8' || str[i] == '9' || str[i] == '0' ){
// //     n = n + 1;
// //   }
// // }
// // console.log(n);

// // // 4

// // let str = 'Lorem ipsum dolor  sit amet, consectetur'
// // let newStr = '';
// // for(let i = str.length -1; i >= 0; i--){
// //   newStr = newStr + str[i] // newStr +=str[i]
// // }
// // console.log(newStr);

// // // 5

// // let word = 'abcddcba';
// // let newWord = '';
// // for (let i = word.length -1; i >= 0; i--){
// //   newWord = newWord + word[i]
// // }if(word == newWord){
// //   console.log(true);
// // }else{
// //   console.log(false);
// // }
// // или
// // console.log(word.localeCompare(newWord));


// // // 6

// // let str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

  
//                            //homework 02/06


// 1
// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
// let arr = [1,2,3,234,34,235,756,2234,7856,25,34,36,546,47,7,];
// for (let i=0; i<arr.length; i++){
//   if(i == 0 || i == arr.length - 1 ){
//     arr[i] = 1;
//   }else{
//     arr[i] = 0;
//   }
// }console.log(arr);


// 2
// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
// let arr =[1,2,3,4,5,56,6,78,768,68,6,5,67,]
// for (let i =0; i < arr.length; i++){
//   if(i%2 == 0){
//     arr[i] = 0;
//   }else{
//     arr[i] = 1;
//   }
// }console.log(arr);


// 3
// Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, равные остатку от деления своего номера на 5.
// let arr = [1,2,3,5,65,23,6,47,421,333,23234,3563465,45785467,23453573,];
// for(let i = 0; i < arr.length; i++){
//   if (i%2 == 0) {
//     arr[i] = 1;
//   }else{
//     arr[i] = i%5
//   }
// }console.log(arr);


// 4
// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива
// let arr =[3,2,6,2354,23546,34,124,43,54,6,8,2,];
// let dividedByFirst = 0;
// let dividedByLast = 0;
// for(let i = 0; i < arr.length; i++){
//   if (arr[i]%arr[0] == 0) {
//     dividedByFirst++
//   }else if(arr[i]%arr[arr.length-1] == 0){
//     dividedByLast++
//   }
// }if (dividedByFirst > dividedByLast) {
//   console.log('Больше которых делятся на первое');
// }else{
//   console.log('Больше которых делятся на последнее');
// }


// 5
// Найти наибольший элемент массива.
// Для строк
// let arrString = ['first','second','thirthsdfgsddgh','fourth,','fifthfgh','sixth',]
// let largerElement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > largerElement.length) {
//     largerElement = arr[i];
//   }
// }console.log(largerElement);
//для чисел
// let arrNumber = [1,2,3,54,23,7,45,23,56,56,8,35,75,345,754,2,3,4,67,578,]
// let greaterNumber = 0;
// for (let i = 0; i < arrNumber.length; i++) {
//   if (arrNumber[i] > greaterNumber) {
//     greaterNumber = arrNumber[i]
//   }
// }console.log(greaterNumber);


// 6
// Найдите сумму наибольшего и наименьшего элементов массива.
// let arr = [2,1,3,23,5,4,67,8,5,3,4,7,5,46,345,78,];
// let bigNumb = arr[0];
// let smallNumb = arr[0];
// for (let i=0; i < arr.length; i++){
//   if(arr[i] > bigNumb){
//     bigNumb = arr[i];
//   }else if(arr[i] < smallNumb){
//     smallNumb = arr[i]
//   }
// }console.log(bigNumb + smallNumb);


// 7
// Проверьте, является ли массив возрастающим или убывающим.
// let arr = [9,8,7,6,5,4,2,];
// let masive = '';
// for (let i = 1; i < arr.length; i++) {
//   if(arr[i] > arr[i - 1]){
//     masive = 'возрастающий'
//   }else if (arr[i] < arr[i - 1]){
//     masive = 'убывающий'
//   }else{
//     masive = 'смешанный'
//   }
// }console.log(masive);


// 8
// Поменять местами наибольший и наименьший элементы массива
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,];
// let bigNum = arr[0];
// let bigNumIndex = 0;
// let smallNum = arr[0];
// let smallNumIndex = 0;
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] > bigNum){
//     bigNum = arr[i];
//     bigNumIndex = i;
//   }else if(arr[i] < smallNum){
//     smallNum = arr[i];
//     smallNumIndex = i;
//   }
  
// }
// console.log(bigNum);
// console.log(bigNumIndex);
// console.log(smallNum);
// console.log(smallNumIndex);
// arr[bigNumIndex] = smallNum;
// arr[smallNumIndex] = bigNum;
// console.log(arr);


// // 9
// // Удалить в массиве первый и последний элементы.
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.pop()
// arr.shift()
// console.log(arr);


// 10
// // Переставить элементы массива в обратном порядке.
// let arr = [1,2,3,4,5,6,7,8,9,0];
// arr.reverse();
// console.log(arr);

// 11
// // Удалите в целочисленном массиве все положительные числа
// let arr = [-1,2,-3,4,-5,6,-7,8,-9,0,];
// let newArr =[];
// for(let i = 0; i <arr.length; i++){
//   if(arr[i] < 0){
//     newArr.push(arr[i]);
//   }
// }console.log(newArr);
