"use strict";
const bot = {
    id: 1,
    name: "mega man",
};
const bot2 = {
    id: 1,
    name: "mega man",
};
console.log(bot.id = 2);
//Usamos interfaces como tipagem para classes (moldes)
class pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new pessoa(1, "gutsman");
console.log(p.sayHello);
