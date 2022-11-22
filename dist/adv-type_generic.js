"use strict";
const data = {
    name: 'Artem',
    privileges: ['test'],
    startDate: new Date(),
};
function complex(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function showFields(el) {
    if ('startDate' in el) {
        console.log(el.startDate);
    }
    if ('privileges' in el) {
        console.log(el.privileges);
    }
    console.log(el.name);
}
class Guy {
    constructor(name) {
        this.name = name;
    }
}
class BadGuy extends Guy {
    insult() {
        console.log('insult');
    }
}
class GoodGuy extends Guy {
    advice() {
        console.log('advice');
    }
}
const good = new GoodGuy('Art');
const bad = new BadGuy('Sar');
function guys(user) {
    if (user instanceof GoodGuy) {
        user.advice();
    }
    if (user instanceof BadGuy) {
        user.insult();
    }
}
const input = document.querySelector('.num1');
if (input) {
    input.value;
}
const user = {
    name: 'MyName',
    gender: 'Male',
    age: 19,
};
const userOpt = {
    name: 'Name',
    age: 19,
};
const rewrew = '';
const rewrdfs = rewrew !== null && rewrew !== void 0 ? rewrew : 'DEFAULT';
function addOver(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const arrGenerics = ['string', 1];
const promise = new Promise((resolve) => {
    resolve('SOme text');
});
function mergeGen(objA, objB) {
    return Object.assign({}, objA, objB);
}
const me = mergeGen({ a: 20 }, { b: 30 });
me.a;
//# sourceMappingURL=adv-type_generic.js.map