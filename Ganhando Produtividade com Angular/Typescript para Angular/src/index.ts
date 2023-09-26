type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa)
}
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman"
});


//Tipagem de Variaveis em Typescript
//Ao definir o tipo da variável, ela obrigatoriamente vai ter que obedeçer essa tipagem

//Tipos Primitivos
let texto:string = "texto"

let number:number = 1

let boolean:boolean = false


//Tipos Especiais
//Usados em estratégias de código (alguma propriedade que não pode ser alterada, etc)
let nulo:null = null;

let indefinido:undefined = undefined;


//Tipos Abrangentes
//Usado em funções que, ou não vão retornar nada (void) ou em funções que não se tem certeza do valor que ira retornar (any)
let retorno:void

let retornoView:any = "Qualquer_Valor"


//Objetos
//Ao definir o type para {object}, obrigatoriamente o valor da variavel tem que ser um objeto, que pode ser declarado de duas formas.

//Sem previsibilidade
//As chaves (ou valores) podem ser de qualquer valor
let produto:object = {
    nome: "Felipe",
    cidade: "sp",
    idade: 30,
};


//Objeto "shapado" ou tipado
//Tipado com os tipos obrigatorios que o objeto deve conter

type produtoLoja = {
    nome:string;
    preço:number;
    unidades:number;
};

let meuProduto: produtoLoja = {
    nome: "tenis",
    preço: 2,
    unidades: 2,
}


//Array`s ou Vetores
//Definimos um tipo para [array] utilizando o tipo primitivo que ela vai receber obrigatoriamente, e logo após colchetes

let dados: string[] = ["felipe", "ana"]

//Multitypes
//Definir mais de um tipo que a array pode receber

let infos: (string | number | false)[] = ["felipe" , 30, false]


//Tuplas
//Vetor multitypes com uma ordem obrigatória

let boleto:[string , number , number] = ["agua" , 30 , 34534]


//Arrays métodos
//Todos os métodos de array em javascript são iguai em typescript
dados.map


//Datas
//
let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());


//Funções
//Em funções o tipo obrigatório e declarado para as variáveis e para o retorno da função
function addNumber(x: number,y: number): number{
    return x + y
}

let soma: number = addNumber(4,7)
console.log(soma);

function addToHello(name: string){
    return `Hello ${name}`;
}

console.log(addToHello("Felipe"));

//Podendo ser colocado mais de um valor aceito
function CallToPhone(phone: number | string): number | string {
    return phone
}

console.log(CallToPhone(1))

//Assincronas

async function getDataBase(id: number): Promise<number | string> {
    return "felipe"    
}




