fetch('https://randomuser.me/api/')
.then((response)=>{
    if (!response.ok) {
        throw new Error("errore");
    }
    return response.json()
})

.then((dati)=>{
    console.log('DATI STAMPATI', dati)
})

.catch((error)=>{
    console.error(error)
})
