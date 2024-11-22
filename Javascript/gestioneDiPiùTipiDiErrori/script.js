function testo(input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('L input deve essere una stringa!');
        }

        let risultato = input.toUpperCase();
        console.log('Risultato:', risultato);
        return risultato;

    } catch (errore) {
        if (errore instanceof TypeError) {
            console.error('Errore di tipo:', errore.message);
        } else {
            console.error('Errore generico:', errore.message);
        }
    }
}

let risultato = testo(5)
