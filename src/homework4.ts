class Key {
  protected sign: number;
  constructor() {
    this.sign = Math.ceil(Math.random() * (10 - 1) + 1);
  }

  getSign(): number {
    return this.sign;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class HouseStat {
  protected door = false;
  protected tenats: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is closed');
    }
    this.tenats.push(person);
    console.log('Person inside');
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends HouseStat {
  openDoor(key: Key): boolean {
    if (key.getSign() !== this.key.getSign()) {
      throw new Error('Key to another door');
    }
    return (this.door = true);
  }
}

const key = new Key()
const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())

house.comeIn(person)
console.log(key.getSign());
