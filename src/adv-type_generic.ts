type Admin = {
  name: string;
  privileges: string[];
};

type User = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User; //it doesn't work for interface

interface IAdminUser extends Admin, User {}

const data: IAdminUser = {
  name: 'Artem',
  privileges: ['test'],
  startDate: new Date(),
};

type ComplexType = string | number;

function complex(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type AdminOrUser = Admin | User;

function showFields(el: AdminOrUser) {
  if ('startDate' in el) {
    console.log(el.startDate);
  }
  if ('privileges' in el) {
    console.log(el.privileges);
  }
  console.log(el.name);
}

abstract class Guy {
  constructor(public name: string) {}
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

function guys(user: Guy) {
  if (user instanceof GoodGuy) {
    user.advice();
  }
  if (user instanceof BadGuy) {
    user.insult();
  }
}

// const input = <HTMLInputElement>document.querySelector('.num1')
// const input = document.querySelector('.num1') as HTMLInputElement
const input = document.querySelector('.num1');

if (input) {
  (input as HTMLInputElement).value;
}

//Index Properties

interface IPerson {
  name: string;
  age: number;
  [prop: string]: string | number;
}

const user: IPerson = {
  name: 'MyName',
  gender: 'Male',
  age: 19,
};

//Optional Chaining
interface IPersonOpt {
  name: string;
  age: number;
  BD?: {
    wasBorn: Date;
  };
}

const userOpt: IPersonOpt = {
  name: 'Name',
  age: 19,
};

//Nullish Coalescing

const rewrew = '';
const rewrdfs = rewrew ?? 'DEFAULT'; // only null or default are false

//function overloads
function addOver(a: number, b: number): number;
function addOver(a: string, b: string): string;
function addOver(a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b
}


/////////////////Generics
//Common
const arrGenerics: Array<string | number> = ['string', 1]

const promise: Promise<string> = new Promise((resolve) => {
  resolve('SOme text')
})

//Function
function mergeGen<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB)
}

const me = mergeGen({a: 20}, {b: 30});

me.a