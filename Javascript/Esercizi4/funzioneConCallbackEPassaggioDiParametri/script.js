function somma (valore1,valore2,callback){
    
    callback(valore1 * valore2)
}

somma(50 , 80 ,function(risultato){

    console.log(risultato)
})
