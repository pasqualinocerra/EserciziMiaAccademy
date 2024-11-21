function divisione(dividendo,divisore) {

    try {
        if (divisore === 0) {
            throw new Error("Il divisore non può essere zero.");
        }

    } catch (error) {

        console.error('Errore')
    }


    return dividendo / divisore
}

let result = divisione(10, 0)

console.log(result)