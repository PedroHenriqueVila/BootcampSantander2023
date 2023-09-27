"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 5], [3]);
const infoArray = concatArray(["nova"], ["vila"], ["pedro"]);
console.log(numArray);
