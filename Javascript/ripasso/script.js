//tipi di dato

let esempio = 'ciao'; // stringa
let numero = 40; // number
let oggetto = { casa: 'mia' }; // object  da ripassare definizione
let arr = [1, 2, 3, 4] //array
let boolean = true //boolean
let nullo3; // undefined
let nullo4 = null; // null

// if & else (condizioni)

let nome = {
    eta : 34,
    annoDiNascita : 1990
};

const annoAttuale = 2024;

if (null) {
    console.log('è uguale')
}
else if (nome.annoDiNascita > nome.eta) {
    console.log('è maggiore')
}
else if (nome.annoDiNascita < nome.eta) {
    console.log('è minore')
}
else if (annoAttuale - nome.eta === nome.annoDiNascita){
    console.log('è uguale')
}

else {
    console.log('non è uguale')
}

// switch case

let numbers = 44;

 switch(numbers){
    case '44':
        console.log('numbers=');
    break;
    case 44:
        console.log('numbers è false');
    break;
    default :
    console.log('numbers è un numero');
 }


 // ciclo for

for(let i = 10; i>1; i--){
    console.log(i);
}

