"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    name;
    level;
    health;
    constructor(name, level, health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        if (level >= 0) {
            this.level = level;
        }
        else {
            console.log("Level cannot be negative");
        }
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        if (health >= 0) {
            this.health = health;
        }
        else {
            console.log("Health cannot be negative");
        }
    }
    showInfo() {
        console.log("========================");
        console.log("Character");
        console.log("========================");
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
        console.log(`Health: ${this.health}`);
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
exports.Character = Character;
