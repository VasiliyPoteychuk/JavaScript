// // let x = 3;
// // let result = (x+1)**2+3*(x+1);
// // alert (result);
// // let a = prompt('Пожалуйста введите число 1')
// // let b = prompt('Пожалуйста введите число 2')
// // a = Number(a)
// // b = Number(b)
// // let result = a + b;
// // alert (result);
// // let resuls = a * b;
// // alert (resuls);
// // let a = prompt('введите число');
// // a = Number(a);
// // let result = a**2;
// // alert (result);
// // let resuls = a**3;
// // alert (resuls);
// // let a = prompt('введите первое число');
// // let b = prompt('введите второе число');
// // let c = prompt('введите третье число');
// // a = Number(a)
// // b = Number(b)
// // c = Number(c)
// // let result = a*2+(b-3)+c**2;
// // alert(result);
// // let a = prompt('введите первое число');
// // let b = prompt('введите второе число');
// // let c = prompt('введите третье число');
// // a = Number(a);
// // b = Number(b);
// // c = Number(c);
// // let result = (a+b+c)/3;
// // let resuls = (a+c)*2-b*3;
// // console.log(result, resuls);
// // let a = prompt('введите сторону квадрата');
// // a = Number(a)
// // let res = a*4;
// // let plo = a*a;
// // console.log('периметр', res);
// // console.log('площадь', plo)
// // //задача 19
// // let a = prompt('цена конфет');
// // let b = prompt('цена печенья');
// // a = Number(a);
// // b = Number(b);
// // let result = 3*(a+0.4*b);
// // console.log('1покупка', result);
// // console.log('2покупка', 3*(2*a+1.8*b));
// //задача 21
// // let a = prompt('введите первый катет');
// // let b = prompt('введите второй катет');
// // a = Number(a);
// // b = Number(b);
// // console.log('первый', (a*b)/2);
// // console.log('второй', a+b+((a**2+b**2)*(1/2)));
// // console.log('третий', (a**2+b**2)*(1/2));
// //24
// // let a = prompt('введите дни');
// // let b = prompt('введите процент скидки');
// // let c = prompt('введите сумму');
// // a = Number(a);
// // b = Number(b);
// // c = Number(c);
// // console.log(a*(c+3))


// // for (let x = 1; x<=10; x++){
// //     let res = (Math.abs(x-5)-Math.sin(x))/3 + Math.sqrt(Math.pow(x,2) + 2014) * Math.cos(2 * x)-3;
// //     console.log(res);
// // }
// // let x = 3.6;
// // let rec = Math.E**(x-2) + Math.abs(Math.sin(x)) - (x**4) * Math.cos(1/x);
// //     console.log(rec);
// // let a = 0.1;
// // let b = 0.2;
// // let x = 1;
// // let rem = ((x**2)+b)**(1/5) -(((b**2) * (Math.sin**3(x + a))) / 2);
// //     console.log(rem);
// let k = 30;
// let m = 30;
// for (let r = 1; r <= m; r++){
//     let s = '';
//     for (let c = 1; c <= k; c++){
//         if (c == k || c == 1 || c == r || r ==1 || r == m || c == m-r){
//             s = s + '1';
//         }else{
//             s = s + '0';
//         }
//     }
//     console.log(s);
// }


// УРОК 23.05.22

// function sum(a , b) {
//     console.log(Math.sqrt(a - Math.sqrt(b)));
// }   
// for (let i =1 ; i <= 10 ; i++){
//     sum(i, i+1);
// }


// function rgb(r=0, g=0, b=0){
//     return 'rgb(' + r + ',' + g + ',' + b + ')';
// }
// let test = rgb(2, 4);
// console.log(test);


// function avg (a, b, c, d, e){
//     return (a + b + c + d + e) / 5;
// }
//  for (let i = 1; i <=558; i++){
//     let res = avg(Math.random(), Math.random(), Math.random(), Math.random(), Math.random() );
//     console.log(res);
//  }

// function plo (a, b){
//     return a*b;
// }
// let a = +prompt;
// let b = +prompt;

// if( a != b){
//    res = plo;
// }else{
//     res = a*a;
// }
// console.log(res);


// function eq(a, b, c){
//     let d = Math.pow(b, 2) - 4 * a * c;
//     if(d >0){
//         let x1 =(b * (-1)+ Math.sqrt(d))/(2 * a);
//         let x2 =(b * (-1)- Math.sqrt(d))/(2 * a);
//         console.log(x1, x2);
//     }else if (d === 0){
//         let x = (b * (-1)) / (2 * a);
//         console.log(x);
//     }else{
//         console.log("корней нет");
//     }
// }


// Study 25.05
//Задача1
// let str = 'Hkaadsdfcouaahds';
// console.log(str[0]);
// console.log(str[str.length -1]);
// if (str.length%2 ==0){
// console.log(str[str.length / 2]);
// }

// Задача2
// let str2 = 'Hkds';
// if(str2.length > 7){
//     console.log(str2.slice(0, 3));
//     console.log(str2.slice(-3));
// }else{
//     let l = str2.length;
//     for(let i = 0; i < l; i++){
//         console.log(str2[0]);
//     }
// }

//Задача3

// let str3 = 'HFJDklasdkfhjksdfvhn';
// for( let i = 3; i < str3.length; i=i+3){
//     console.log(str3[i]);
// }

//Задача4

// let str4 = 'KkjdfhiauhDJHkfjsivsniewd';
// let r = "";
// let l = "";
// for(let i = 0; i < str4.length; i++){
//     if(i%2 == 0){
//         r =r + str4[i];
//     }else{
//         l =l + str4[i]
//     }
// }
// console.log(r);
// console.log(l);

//Задача5

// let str5 = 'iu!Hbgiuh!iubguyg!bgy!';
// str5 = str5.replaceAll('!','');
// console.log(str5);

// //Задача6

// let str6 = '+-++0++--0--+++0+---+';
// let plus = 0;
// let minus =0;
// let withZero =0;
// for (let i = 0; i < str6.length; i++){
//     if(str6[i] == '+'){
//         plus++;
//     }else if(str6[i] == '-'){
//         minus++;
//     }
//     if((str6[i]=='-' || str6[i]=='+') && i < str6.length -1 && str6[i + 1]=='0' ){
//         withZero++;
//     }
// }
// console.log(plus);
// console.log(minus);
// console.log(withZero);

//Задача7

// let str7 = 'oachisuvhoiokdsjv9jbdf';
// let s = '';
// for(let i = 0; i < str7.length; i++){
//  s = s + str7[i] + ' ';
// }
// console.log(s);

//8

// let str8 = 'kja';
// let s = "o";
// if (str8.length > 10){
//    console.log( str8.slice(0, 6));
// }else{
//     str8 = str8.padEnd(12, 'o');
//     console.log(str8);
// }

// //9

// let str9 = 'jkhbvcavknikcvnkjavindvsk';
// str9 = str9.replaceAll('world', 'leter');
// console.log(str9);

//10

// let str10 = ' ojni ijn uhi jniu    hi     m';
// while (str10.includes) {
    
// }

//                             01.06.22



//1
// let arr = [];
// for(let i = 1; i < 999; i++){
//     if(i % 2 == 0){
//         arr.push(i); 
//     }
// }console.log(arr);

//2

// let arr = [];
// for(let i = 1000; i > 200; i--){
//     if(i % 3 == 0){
//         arr.push(i)
//     }
// }console.log(arr);

//3

// let arr =[];
// for (let i =0; i < 50; i++){
//     arr.push((i+1)**2);
// }console.log(arr);

//4

// let arr = [2,4,7,1,2,5,7];
// let n = 0;
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 ==0 ) {
//         n = n + 1;
//     }
// }console.log(n);

//5

// let arr = [1,2,3,4,5,];
// let summ = 0;
// let product = 1;
// for (let i = 0; i < arr.length; i++){
//     summ = summ + arr[i]
//     product = product * arr[i]
// }
// console.log(summ);
// console.log(product);

//6

// let arr = [1,2,3,4,5,6,7,8,3,];
// let summ = 0;
// let summExtreme = arr[0] + arr[arr.length - 1]
// for(let i =0; i < arr.length; i++){
//     if(i % 2 && arr[i] > summExtreme){
//     summ = summ + arr[i];
//     }
    
// }console.log(summ);

//7

// let arr = [1,2,3,4,5,3,4,5,6,1,2,4,5,6,3,7,];
// let small = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 ==0 && arr[i] < small){
//         small = arr[i];
//     }
// }console.log(small);

//9

// let arr = [1,2,3,54,4,3,34,7,4567,546,];
// let isDublicate = false;
// while(arr.length){
//     const element = arr.pop();
//     if(arr.includes(element)){
//         isDublicate = true;
//         break;
//     }
// }
// console.log(isDublicate);

//10

let str = 'Дана   строка,   состоящая    из слов';
while (str.includes('  ')) {
    str = str.replaceAll('  ',' ');
}
let words = str.split(' ')
console.log(words);
