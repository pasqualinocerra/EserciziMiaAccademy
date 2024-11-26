let obj = {
    indirizzo : 'roma',
    numeroCivico : 40,
}

let {indirizzo, numeroCivico,paese = 'italia'}= obj;

console.log(indirizzo,obj,paese)