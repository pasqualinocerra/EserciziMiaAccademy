function somma (valore1,valore2,callback){
    
    callback(valore1 + valore2)
}

somma(10 , 30 ,function(risultato){

    console.log(risultato)
})
