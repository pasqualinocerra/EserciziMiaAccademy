function nuovaFunzione() {
        let number = 0;
    return new Promise((resolve, reject) => {
        if (number > 10 ) {
            resolve('il numero è maggiore di 10')
        } else {
            reject('il numero è minore di 10')
        }
    })
}

nuovaFunzione()
    .then((maggiore) => {
        console.log(maggiore); 
        return maggiore; 
    })
    .then((valore) => {
        console.log(`Valore dal primo then: ${valore}`);
    })
    .catch((errore) => {
        console.error('Errore:', errore); 
    });