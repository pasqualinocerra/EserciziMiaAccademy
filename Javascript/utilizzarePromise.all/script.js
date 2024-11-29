function numbers() {
    let numero = 10;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 0) {
                resolve('il numero è maggiore')
            } else {
                reject('il numero è minore')
            }
        }, 2000);
    })
}

function value() {
    let ok = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve('vero')
            } else {
                reject('falso')
            }
        }, 2000);
    })
}
Promise.all([numbers(),value()])
.then((risultato)=>{
    console.log(risultato)
})
