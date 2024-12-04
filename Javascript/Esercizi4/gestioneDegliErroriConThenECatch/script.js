function nuovaProva() {
    let ok = false;
    return new Promise((resolve, reject) => {
        if (ok) {
            console.log('il valore è pari')
        } else {
            console.error('il valore è dispari')
        }
    })
}

nuovaProva()
.then((pari)=>{
    console.log(pari)

    return pari;
})

.catch((dispari)=>{
    console.error(dispari)
})
