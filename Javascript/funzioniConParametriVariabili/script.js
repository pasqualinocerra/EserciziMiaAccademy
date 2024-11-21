function argomenti(...argomentazione) {
    
    return argomentazione.reduce((acc, curr) => acc + curr, 0);
}
let totale = argomenti(10,40);

console.log(totale)


