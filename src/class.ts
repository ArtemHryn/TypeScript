class House {
  private tenants: string[] = [];

  constructor(protected street: string, private type: string) {}

  showAddress(): void {
    console.log(this.street);
  }
  showType(): void {
    console.log(this.type);
  }

  public addTenant(name: string): void {
    this.tenants.push(name);
  }
  public showTenants(): void {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super(street, 'stone');
    this.chargeOfTheHouse = general;
  }
  showCharge(): void {
    console.log(this.chargeOfTheHouse);
    super.showTenants();
  }
  showAddress(): void {
    console.log(this.street);
  }
}

const stoneHouse = new StoneHouse('Bonk', 'Max');

// class UseStat {
//   private static count = 0;
//   constructor() {
//     UseStat.count += 1;
//   }

//   showCount() {
//     console.log(UseStat.count);
//   }
// }

// abstract class Plane {
//   protected pilotInCabine = false;

//   public sitInPlane() {
//     this.pilotInCabine = true;
//   }

//   public abstract startEng(): string;
// }

// class Meize extends Plane {
//   public startEng(): string {
//     return 'Ta-tat-ta';
//   }
// }
// class Boeing extends Plane {
//   public startEng(): string {
//     return 'Piu-peeu';
//   }
// }

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// const user: IPerson = {
//   name: 'Art',
//   age: 20,

//   greet(phrase: string) {
//     console.log(phrase);
    
//   }
// };
