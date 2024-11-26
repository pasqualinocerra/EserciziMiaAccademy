function somma(a,b,callback){
    callback(a + b);
}

function quadrato(c,callback){
    callback(c*c);
}

somma(30 , 70,function(risultato){
    quadrato(risultato,function(risultatoFinale){
        console.log(risultatoFinale)
    })
    
})





