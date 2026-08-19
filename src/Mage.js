"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    mana;
    spell;
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    setMana(mana) {
        if (mana >= 0) {
            this.mana = mana;
        }
        else {
            console.log("Mana cannot be negative");
        }
    }
    getSpell() {
        return this.spell;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    castSpell() {
        if (this.mana >= this.spell.getManaCost()) {
            console.log(`${this.getName()} casts ${this.spell.getName()}!`);
            console.log(`Damage: ${this.spell.getDamage()}`);
            this.mana -= this.spell.getManaCost();
            console.log(`Mana remaining: ${this.mana}`);
        }
        else {
            console.log(`${this.getName()} does not have enough mana!`);
        }
    }
}
exports.Mage = Mage;
