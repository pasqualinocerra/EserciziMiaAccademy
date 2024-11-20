let squadra = {
    attaccante : 'mario',
    centrocampista : 'luigi',
    difensore : 'marco',
    portiere : 'manfredi'
}

let {attaccante,centrocampista,...difesa} = squadra;

console.log(attaccante)
console.log(centrocampista)
console.log(difesa)