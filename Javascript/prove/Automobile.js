        //funzioni

function saluta (nome){
    console.log('ciao,' + nome );
}

saluta('marco');


function somma(a,b,c,d){
    return a + b + c + d;
}

let risultato = somma(12,45,90,1) ;

console.log(risultato);

        //arrow function

let divisione = (a , b) => a / b;

console.log(divisione(30, 5));



        //funzioni annidate


function prezzo(sconto){

    let valore= 0.40;

    function capo(){

        return sconto * valore;
    }

    return sconto + capo();
}

console.log(prezzo(200));





 