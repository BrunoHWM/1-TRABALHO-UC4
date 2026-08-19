import { Character } from './Character';
import { Weapon } from './Weapon';

export class Warrior extends Character {

    private strength: number
    private weapon: Weapon

    constructor( name: string, level: number, health: number, strength: number, weapon: Weapon
    ) {
        super(name, level, health)
        this.strength = strength
        this.weapon = weapon
    }

    public getStrength(): number {
        return this.strength
    }

    public setStrength(strength: number): void {
        this.strength = strength
    }

    public getWeapon(): Weapon {
        return this.weapon
    }

    public setWeapon(weapon: Weapon): void {
        this.weapon = weapon
    }

    public attack(): void {
        console.log(`${this.getName()} attacks with ${this.weapon.getName()}!`)
        console.log(`Damage: ${this.weapon.getDamage()}`)
    }
}