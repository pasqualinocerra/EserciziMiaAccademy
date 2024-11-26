function risultato(){
    return new Promise((resolve, reject) => {
        const ok = true;
        if (ok) {
            resolve('operazione riuscita')
        } else {
            reject('operazione non riuscita')
        }
    })
}

risultato().then((result)=>{
    console.log('operazione riuscita')
})
