function esempioPratico() {
        let ok = false;
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve('La promessa è risolta');
        } else {
            reject('La promessa è stata rifiutata');
        }
    })
}

esempioPratico()
.then((risolta)=>{
    if (risolta) {
        console.log(risolta)
    }

    return risolta;
})

.catch((nonRisolta)=>{
    if (nonRisolta) {
        console.error('non risolta')
    }
})