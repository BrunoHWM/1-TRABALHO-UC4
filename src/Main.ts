import { Weapon } from "./Weapon"
import { Spell } from "./Spell"
import { Warrior } from "./Warrior"
import { Mage } from "./Mage"
import { Party } from "./Party"

const adaga = new Weapon("Adaga", 35)
const axe = new Weapon("Axe", 45)

const Snatch = new Spell("Snatch", 50, 30)
const infinit = new Spell("Ice infinit", 30, 10)

const warrior1 = new Warrior("Meliodas", 10, 150, 80, adaga)
const warrior2 = new Warrior("Escanor", 9, 160, 90, axe)

const mage1 = new Mage("Ban", 12, 150, 100, Snatch)
const mage2 = new Mage("Merlin", 8, 120, 120, infinit)

const party = new Party("The Dragon Slayers")

party.addMember(warrior1)
party.addMember(warrior2)
party.addMember(mage1)
party.addMember(mage2)

party.showMembers()

warrior1.attack()
warrior2.attack()

mage1.castSpell()
mage2.castSpell()


party.removeMember(warrior2)

party.showMembers()