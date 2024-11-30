fetch('https://randomuser.me/api/')
.then((Response)=>{
    if (!Response.ok) {
        throw new Error("errore");
    }
    return Response.json()
})

.then((dati)=>{
    console.log(dati)
})

.catch((error)=>{
    console.error(error)
})