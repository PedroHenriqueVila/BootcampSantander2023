// O que são vetores ou Arrays

//Declarar uma array

let array = ['string' , 1 , true] ;
console.log(array);

// forEach

array.forEach(function(item, index){console.log(item, index)});

// push

array.push('novo item');
console.log(array);

// pop

array.pop();
console.log(array);

// shift

array.shift();
console.log(array);

// unshift

array.unshift('novo item no inicio');
console.log(array);

// index of

console.log(array.indexOf(true));

// splice

array.splice(0, 1);

// slice

let novoArray = array.slice(0, 3);
console.log(novoArray);



// Object

let Object = {string: 'string' , number: 1 , boolean: true , array: ['array'] , objectInterno: {objectInterno: 'objeto interno'}};
console.log(Object.number);

var string = Object.string;
console.log(string);

var arrayInterno = Object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = Object;
console.log(string, boolean, objectInterno);
