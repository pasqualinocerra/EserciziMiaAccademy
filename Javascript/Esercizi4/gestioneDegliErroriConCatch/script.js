function funzioneNonValida() {
    return new Promise((resolve,reject) => {
        reject('la funzione non va bene')
    })
}

funzioneNonValida()
.catch((value)=>{
    console.error(value)
})