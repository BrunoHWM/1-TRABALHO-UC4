"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    name;
    damage;
    manaCost;
    constructor(name, damage, manaCost) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
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
    getManaCost() {
        return this.manaCost;
    }
    setManaCost(manaCost) {
        if (manaCost >= 0) {
            this.manaCost = manaCost;
        }
        else {
            console.log("Mana cost cannot be negative");
        }
    }
    showInfo() {
        console.log("========================");
        console.log("Spell");
        console.log("========================");
        console.log(`Name: ${this.name}`);
        console.log(`Damage: ${this.damage}`);
        console.log(`Mana Cost: ${this.manaCost}`);
    }
}
exports.Spell = Spell;
