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

function plo (a, b){
    return a*b;
}
let a = +prompt;
let b = +prompt;

if( a != b){
   res = plo;
}else{
    res = a*a;
}
console.log(res);