"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    strength;
    weapon;
    constructor(name, level, health, strength, weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }
    getStrength() {
        return this.strength;
    }
    setStrength(strength) {
        this.strength = strength;
    }
    getWeapon() {
        return this.weapon;
    }
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.getName()} attacks with ${this.weapon.getName()}!`);
        console.log(`Damage: ${this.weapon.getDamage()}`);
    }
}
exports.Warrior = Warrior;
