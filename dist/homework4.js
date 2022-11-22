"use strict";
class Key {
    constructor() {
        this.sign = Math.ceil(Math.random() * (10 - 1) + 1);
    }
    getSign() {
        return this.sign;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class HouseStat {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenats = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is closed');
        }
        this.tenats.push(person);
        console.log('Person inside');
    }
}
class MyHouse extends HouseStat {
    openDoor(key) {
        if (key.getSign() !== this.key.getSign()) {
            throw new Error('Key to another door');
        }
        return (this.door = true);
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
console.log(key.getSign());
//# sourceMappingURL=homework4.js.map