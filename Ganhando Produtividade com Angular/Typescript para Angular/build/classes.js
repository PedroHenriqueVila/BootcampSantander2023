"use strict";
//Classes
/*
Data modifiers

public - Indica que uma propriedade fica pública para ser acessada (por default se nada for declarado ela já e definida)
private - Indica que uma propriedade só pode ser acessada por dentro da classe
protected - Indica que uma propriedade só pode ser acessado dentro da classe e classes que herdam essa mesma (subclasse)

[podem ser usados em metodos como o attack()]
*/
class character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength}`);
    }
}
//Subclasses
//character = superclass
//magician = subclass
class magician extends character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new character("Ryu", 10, 98);
const p2 = new magician("mago", 50, 100, 200);
p1.attack();
