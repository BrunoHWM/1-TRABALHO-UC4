export class Spell {

    private name: string
    private damage: number
    private manaCost: number

    public constructor(name: string, damage: number, manaCost: number) {
        this.name = name
        this.damage = damage
        this.manaCost = manaCost
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getDamage(): number {
        return this.damage
    }

    public setDamage(damage: number): void {
        if (damage >= 0) {
            this.damage = damage
        } else {
            console.log("Damage cannot be negative")
        }
    }

    public getManaCost(): number {
        return this.manaCost
    }

    public setManaCost(manaCost: number): void {
        if (manaCost >= 0) {
            this.manaCost = manaCost
        } else {
            console.log("Mana cost cannot be negative")
        }
    }

    public showInfo(): void {
        console.log("========================")
        console.log("Spell")
        console.log("========================")
        console.log(`Name: ${this.name}`)
        console.log(`Damage: ${this.damage}`)
        console.log(`Mana Cost: ${this.manaCost}`)
    }
}