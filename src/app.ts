const button = document.querySelector('.button')! as HTMLButtonElement;
const num1 = document.querySelector('.num1')! as HTMLInputElement;
const num2 = document.querySelector('.num2')! as HTMLInputElement;

function add(a: number, b: number) {
  return a + b;
}

button.addEventListener('click', () => {
  console.log(add(+num1.value, +num2.value));
});

let num: number = 1; // немає сенку тут писати тип
let str: string;
str = '1';

const arr: string[] = ['test'];

let arrObj: { name: string }[] = [{ name: 'Test' }];
console.log(arrObj);

let dbResponse: { id: number; title: string; info?: { date: Date; location: string } };
dbResponse = { id: 1, title: 'test', info: { date: new Date(), location: 'Kiyv' } };

let unkn: unknown
unkn = 1
unkn = 'str'

let unkn2: string

if (typeof unkn === 'string') {
  unkn2 = unkn;
}

//tuple

let fixed: [string, number]

//ENUM

enum Toggle { ENABLE, DISABLE }

const service = {
  status: Toggle.ENABLE
}

if (service.status === Toggle.ENABLE) {
  console.log('is Active');
  
}

//UNION

let union: string | number

function combine(param1: number | string, param2: number | string){
  if (typeof param1 === 'string' || typeof param2 === 'string') {
    return param1.toString() + param2.toString()
  }
  return param1 + param2
}

console.log(combine(2, 3));

//LITERAL

let active: 'start' | 'end'

active = 'start'; //тільки start або end може бути в цій змінній

const fruits: string[] = []
function workWithFruits(arr: string[], value: string, action: 'add' | 'delete') {
  if (action === 'add') {
  arr.push(value)
  }
  arr.length
  return arr
}


console.log(workWithFruits(fruits, 'apple', 'add'));