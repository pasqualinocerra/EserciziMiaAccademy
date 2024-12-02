function risultato(){
    return new Promise((resolve, reject) => {
        const ok = true;
        setTimeout(() => {
            if (ok) {
                resolve('operazione riuscita')
            } else {
                reject('operazione non riuscita')
            }
        }, 2000);
        
    })
}

risultato().then((result)=>{
    console.log('operazione riuscita')
})
