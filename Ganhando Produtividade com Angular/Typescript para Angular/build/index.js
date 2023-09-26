"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjetos(pessoa) {
    console.log(pessoa);
}
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman"
});
//Tipagem de Variaveis em Typescript
//Ao definir o tipo da variável, ela obrigatoriamente vai ter que obedeçer essa tipagem
//Tipos Primitivos
let texto = "texto";
let number = 1;
let boolean = false;
//Tipos Especiais
//Usados em estratégias de código (alguma propriedade que não pode ser alterada, etc)
let nulo = null;
let indefinido = undefined;
//Tipos Abrangentes
//Usado em funções que, ou não vão retornar nada (void) ou em funções que não se tem certeza do valor que ira retornar (any)
let retorno;
let retornoView = "Qualquer_Valor";
//Objetos
//Ao definir o type para {object}, obrigatoriamente o valor da variavel tem que ser um objeto, que pode ser declarado de duas formas.
//Sem previsibilidade
//As chaves (ou valores) podem ser de qualquer valor
let produto = {
    nome: "Felipe",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "tenis",
    preço: 2,
    unidades: 2,
};
//Array`s ou Vetores
//Definimos um tipo para [array] utilizando o tipo primitivo que ela vai receber obrigatoriamente, e logo após colchetes
let dados = ["felipe", "ana"];
//Multitypes
//Definir mais de um tipo que a array pode receber
let infos = ["felipe", 30, false];
//Tuplas
//Vetor multitypes com uma ordem obrigatória
let boleto = ["agua", 30, 34534];
//Arrays métodos
//Todos os métodos de array em javascript são iguai em typescript
dados.map;
//Datas
//
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
//Funções
//Em funções o tipo obrigatório e declarado para as variáveis e para o retorno da função
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Felipe"));
//Podendo ser colocado mais de um valor aceito
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(1));
//Assincronas
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
