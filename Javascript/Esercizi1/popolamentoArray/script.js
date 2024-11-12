let parole = [];

for(let i = 1; i <=5; i++){
    let parola = prompt('inserisci le parole')
    parole.push(parola)
}

for(let i = 0; i <parole.length; i++){
    
    if(parole[i].length %2 ===1){
        console.log(parole[i])
    }

}

