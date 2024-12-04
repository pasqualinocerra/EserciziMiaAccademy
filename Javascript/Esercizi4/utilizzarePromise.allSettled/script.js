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

function falso() {
    let ok = false;
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

Promise.allSettled([numbers(),value(),falso()])
.then((risultatoFinale)=>{
    console.log(risultatoFinale[0])
    console.log(risultatoFinale[1])
    console.error(risultatoFinale[2])
})
