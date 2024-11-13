class Automobile {
    marca=''
    modello=''
    anno=''


    constructor (marca,modello,anno){
        this.marca=marca
        this.modello=modello
        this.anno=anno
    }

}

let auto = new Automobile('fiat','punto',2000);

console.log(auto)