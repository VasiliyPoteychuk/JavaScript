"use strict"
// let admin ;
// let name ;
// name = 'Djon';
// admin = name;
// alert (admin);
// let name ;
// name = 'Vasya' ;
// alert (`Тебя зовут, ${name}`);
//плавающие кавычки
// let age;
// age = prompt('Сколько тебе лет?');
// alert (`Тебе ${age} лет`);
let depositAmount ;
depositAmount = prompt ('Введите сумму депозита')
let depositeTime ;
depositeTime = prompt ('Введите срок хранения в месяцах') ;
let intrestRate ;
intrestRate = confirm ('Процентная ставка 5% годовых') ;
intrestRate = 5 ;
alert (`Прибыль за месяц ${depositAmount*(depositeTime/100)/365*30}`) ;
alert (`прибыль за весь срок депозита ${depositAmount*(intrestRate/100)/365*30*depositeTime}`) ;
alert (`Общая сумма к выплате ${+depositAmount + +depositAmount*(intrestRate/100)/365*30*depositeTime}`)