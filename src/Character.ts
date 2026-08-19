export class Character {

    private name: string
    private level: number
    private health: number

    public constructor(name: string, level: number, health: number) {
        this.name = name
        this.level = level
        this.health = health
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getLevel(): number {
        return this.level
    }

    public setLevel(level: number): void {
        if (level >= 0) {
            this.level = level
        } else {
            console.log("Level cannot be negative")
        }
    }

    public getHealth(): number {
        return this.health
    }

    public setHealth(health: number): void {
        if (health >= 0) {
            this.health = health
        } else {
            console.log("Health cannot be negative")
        }
    }

    public showInfo(): void {
        console.log("========================")
        console.log("Character")
        console.log("========================")
        console.log(`Name: ${this.name}`)
        console.log(`Level: ${this.level}`)
        console.log(`Health: ${this.health}`)
    }

    public takeDamage(amount: number): void {
        this.health -= amount

        if (this.health < 0) {
            this.health = 0
        }
    }
}