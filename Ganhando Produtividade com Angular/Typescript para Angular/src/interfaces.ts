//interfaces(type x interface)
type robot = {
    id:number
    name:string
}

interface robot2 {
    readonly id:number
    name:string
    sayHello():string
}

const bot: robot = {
    id:1,
    name: "mega man",
}

const bot2: robot = {
    id:1,
    name: "mega man",
}

console.log(bot.id = "2")

//Usamos interfaces como tipagem para classes (moldes)

class pessoa implements robot2 {
    id: number
    name: string

    constructor(id: number , name: string) {
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello i'm ${this.name}`
    }
}

const p = new pessoa(1, "gutsman")
console.log(p.sayHello)