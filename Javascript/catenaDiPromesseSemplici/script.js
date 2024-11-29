function creaNumero(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}

creaNumero()
.then((number)=>{
    return number * 2;
})

.then((result)=>{
    return result + 3;
})

.then((risultatoFinale)=>{
    console.log(`Risultato finale: ${risultatoFinale}`);
})


