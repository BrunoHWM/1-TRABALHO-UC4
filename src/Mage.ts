import { Character } from "./Character"
import { Spell } from "./Spell"

export class Mage extends Character {

    private mana: number
    private spell: Spell

    public constructor(name: string, level: number, health: number,mana: number, spell: Spell ) {
        super(name, level, health)
        this.mana = mana
        this.spell = spell
    }

    public getMana(): number {
        return this.mana
    }

    public setMana(mana: number): void {
        if (mana >= 0) {
            this.mana = mana
        } else {
            console.log("Mana cannot be negative")
        }
    }

    public getSpell(): Spell {
        return this.spell
    }

    public setSpell(spell: Spell): void {
        this.spell = spell
    }

    public castSpell(): void {
        if (this.mana >= this.spell.getManaCost()) {
            console.log(`${this.getName()} casts ${this.spell.getName()}!`)
            console.log(`Damage: ${this.spell.getDamage()}`)

            this.mana -= this.spell.getManaCost()

            console.log(`Mana remaining: ${this.mana}`)
        } else {
            console.log(`${this.getName()} does not have enough mana!`)
        }
    }
}