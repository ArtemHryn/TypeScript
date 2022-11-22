"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error('Pilot to young');
        }
    }
    greet(phrase) {
        console.log(phrase);
    }
    flyMessage() {
        console.log('We are starting');
    }
}
class PlaneX {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class BoeingX extends PlaneX {
    startEng() {
        if (!this.pilot) {
            throw new Error('No Pilot');
        }
        console.log('Start Eng');
        this.pilot.flyMessage();
        return true;
    }
}
const pilot = new Pilot('Art', 29);
const boeing = new BoeingX();
boeing.sitInPlane(pilot);
//# sourceMappingURL=interface_class.js.map