function numbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(11)
        }, 1000);
    })
}

numbers()
.then((pari)=>{
    if (pari % 2 === 0) {
        console.log('il numero è pari')
    }

    return pari ;
})

.then((dispari)=>{
    if (dispari % 2 === 1) {
        console.log('il numero è dispari')
    }
})