function outerFunction(x) {
    function innerFunction(y) {
        
        return x + y;
    }
    return innerFunction(5);
}

let risultato = outerFunction(6);