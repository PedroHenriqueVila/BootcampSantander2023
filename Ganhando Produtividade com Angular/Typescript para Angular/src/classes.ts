//Classes


/*
Data modifiers

public - Indica que uma propriedade fica pública para ser acessada (por default se nada for declarado ela já e definida)
private - Indica que uma propriedade só pode ser acessada por dentro da classe
protected - Indica que uma propriedade só pode ser acessado dentro da classe e classes que herdam essa mesma (subclasse)

[podem ser usados em metodos como o attack()]
*/

class character {
    // (?) define um tipo opcional
    protected name?: string;
    // (readonly) define que sera um valor somente de leitura, não sendo possível alterar
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name
        this.strength = strength
        this.skill = skill
    }

    attack(): void {
        console.log(`Attack with ${this.strength}`)
    }
}

//Subclasses

//character = superclass
//magician = subclass

class magician extends character {
    magicPoints: number
    
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill)
        this.magicPoints = magicPoints;
    }

}

const p1 = new character("Ryu", 10, 98);
const p2 = new magician("mago", 50, 100, 200)
p1.attack();




