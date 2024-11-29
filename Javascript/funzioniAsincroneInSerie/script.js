async function primaFunzione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('questa è la prima funzione')
        }, 3000);
    })
}

async function secondaFunzione() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('questa è la seconda funzione')
        }, 6000);
    })
}

async function funzioniInSerie() {
    console.log('inizio preparazione...')

    
const funzione1 = await primaFunzione();
console.log('prima funzione')

const funzione2 = await secondaFunzione();
console.log('seconda funzione')

console.log('tutte le funzioni sono state eseguite')
}



funzioniInSerie();