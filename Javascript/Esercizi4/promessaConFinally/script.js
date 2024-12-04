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
 risultato().catch((result)=>{
 console.error('operazione non riuscita')
 })

 risultato().finally((risultato)=>{
    console.log('il risultato va avanti a prescindere')
 })