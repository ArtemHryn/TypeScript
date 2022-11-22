"use strict";
const button = document.querySelector('.button');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
function add(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log(add(+num1.value, +num2.value));
});
let num = 1;
let str;
str = '1';
const arr = ['test'];
let arrObj = [{ name: 'Test' }];
console.log(arrObj);
let dbResponse;
dbResponse = { id: 1, title: 'test', info: { date: new Date(), location: 'Kiyv' } };
let unkn;
unkn = 1;
unkn = 'str';
let unkn2;
if (typeof unkn === 'string') {
    unkn2 = unkn;
}
let fixed;
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
const service = {
    status: Toggle.ENABLE
};
if (service.status === Toggle.ENABLE) {
    console.log('is Active');
}
let union;
function combine(param1, param2) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        return param1.toString() + param2.toString();
    }
    return param1 + param2;
}
console.log(combine(2, 3));
let active;
active = 'start';
const fruits = [];
function workWithFruits(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    arr.length;
    return arr;
}
console.log(workWithFruits(fruits, 'apple', 'add'));
//# sourceMappingURL=app.js.map