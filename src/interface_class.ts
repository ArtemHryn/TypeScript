interface IPersonX {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPilot, IPersonX {
  constructor(public name: string, public age: number) {
    this.checkAge();
  }
  private checkAge() {
    if (this.age < 28) {
      throw new Error('Pilot to young');
    }
  }
  greet(phrase: string) {
    console.log(phrase);
  }
  flyMessage() {
    console.log('We are starting');
  }
}

abstract class PlaneX {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot) {
    this.pilot = pilot;
  }
  public abstract startEng(): boolean;
}

class BoeingX extends PlaneX {
  public startEng() {
    if (!this.pilot) {
      throw new Error('No Pilot');
    }
    console.log('Start Eng');
    this.pilot.flyMessage();
    return true;
  }
}

const pilot = new Pilot('Art', 29);
const boeing = new BoeingX()

boeing.sitInPlane(pilot)
