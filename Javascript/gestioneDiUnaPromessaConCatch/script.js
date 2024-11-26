function risultato(){
    return new Promise((resolve, reject) => {
        const ok = false;
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
 risultato().catch((result)=>{
 console.error('operazione non riuscita')
 })