"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    name;
    members;
    constructor(name, members = []) {
        this.name = name;
        this.members = members;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMembers() {
        return this.members;
    }
    setMembers(members) {
        this.members = members;
    }
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        const index = this.members.indexOf(character);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }
    showMembers() {
        console.log("=============================");
        console.log(`Party: ${this.name}`);
        console.log("=============================");
        for (let i = 0; i < this.members.length; i++) {
            const member = this.members[i];
            console.log(`${i + 1}. ${member.getName()} - Level ${member.getLevel()}`);
        }
        console.log("=============================\n");
    }
}
exports.Party = Party;
