async function prova() {
    let ok = false;
    try {
        const risultato =  await new Promise((resolve, reject) => {
            if (ok) {
                resolve('il valore è positivo')
            } else {
                reject('il valore è negativo')
            }
        })

        console.log(risultato)

        return risultato;

    } catch (error) {
        console.error(error)
        throw error;
        
    }
}

prova()
.then((risultato)=>
    console.log(risultato))

.catch((errore) => 
    console.error( errore));

