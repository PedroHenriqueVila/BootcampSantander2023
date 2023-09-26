"use strict";
//Classes
/*
Data modifiers

public - Indica que uma propriedade fica pública para ser acessada (por default se nada for declarado ela já e definida)
private - Indica que uma propriedade só pode ser acessada por dentro da classe
protected -
*/
class character {
    constructor(strength, skill) {
        // this.name = name
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength}`);
    }
}
const p1 = new character(10, 98);
p1.attack();
