export class Weapon {

    private name: string
    private damage: number

    public constructor(name: string, damage: number) {
        this.name = name
        this.damage = damage
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

    public showInfo(): void {
        console.log("========================")
        console.log("Weapon")
        console.log("========================")
        console.log(`Name: ${this.name}`)
        console.log(`Damage: ${this.damage}`)
    }
}