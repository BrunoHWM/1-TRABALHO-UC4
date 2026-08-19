"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getDamage() {
        return this.damage;
    }
    setDamage(damage) {
        if (damage >= 0) {
            this.damage = damage;
        }
        else {
            console.log("Damage cannot be negative");
        }
    }
    showInfo() {
        console.log("========================");
        console.log("Weapon");
        console.log("========================");
        console.log(`Name: ${this.name}`);
        console.log(`Damage: ${this.damage}`);
    }
}
exports.Weapon = Weapon;
