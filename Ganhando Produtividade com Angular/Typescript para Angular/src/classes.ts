//Classes
class character {
    name: string
    strength: number
    skill: number

    constructor(name: string, strenght: number, skill: number) {
        this.name = name;
        this.strength = strenght;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`)
    }
}