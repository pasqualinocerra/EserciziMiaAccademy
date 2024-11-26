function Persona (oggetto){

    return `${oggetto.nome}, ${oggetto.cognome} ,${oggetto.città}`
}

const newPersona = {
    nome: 'mario',
    cognome : 'rossi',
    città : 'novara'
}


let soggetto = Persona(newPersona)

console.log(soggetto)