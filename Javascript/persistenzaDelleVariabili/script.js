function outerFunction(x , initialValue) {
    let result = initialValue;

    function innerFunction(y) {
        
        return y + result ;
    }
    return innerFunction(5);
}

let risultato = outerFunction(6,8);