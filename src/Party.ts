import { Character } from "./Character"

export class Party {

    private name: string
    private members: Character[]

    public constructor(name: string, members: Character[] = []) {
        this.name = name
        this.members = members
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name
    }

    public getMembers(): Character[] {
        return this.members
    }

    public setMembers(members: Character[]): void {
        this.members = members
    }

    public addMember(character: Character): void {
            this.members.push(character)
}

    public removeMember(character: Character): void {
        const index = this.members.indexOf(character)

        if (index !== -1) {
        this.members.splice(index, 1)
        }
    }

    public showMembers(): void {
        console.log("=============================")
        console.log(`Party: ${this.name}`)
        console.log("=============================")
        for (let i = 0; i < this.members.length; i++) {
            const member = this.members[i]
             console.log(`${i + 1}. ${member.getName()} - Level ${member.getLevel()}`)
        }
        console.log("=============================\n")
    }
}