"use strict";
class House {
    constructor(street, type) {
        this.street = street;
        this.type = type;
        this.tenants = [];
    }
    showAddress() {
        console.log(this.street);
    }
    showType() {
        console.log(this.type);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, general) {
        super(street, 'stone');
        this.chargeOfTheHouse = general;
    }
    showCharge() {
        console.log(this.chargeOfTheHouse);
        super.showTenants();
    }
    showAddress() {
        console.log(this.street);
    }
}
const stoneHouse = new StoneHouse('Bonk', 'Max');
//# sourceMappingURL=class.js.map