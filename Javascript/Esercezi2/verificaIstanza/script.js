class Automobile {
    marca=''
    modello=''
    anno=''

    constructor (marca,modello,anno){
        this.marca=marca
        this.modello=modello
        this.anno=anno
    } 

    static verificaIstanza(obj,classe){
        if (obj instanceof Automobile) {
            console.log('obj è un istanza della classe Automobile')
        } else{
            console.log('obj non è una istanza di Automobile')
        }
    }
}

let auto = new Automobile('fiat','punto',1990);


console.log(auto instanceof Automobile)

console.log(Automobile.verificaIstanza());




class Camion {

    caricoMassimo=''
    modello=''
    
    constructor(caricoMassimo,modello){
;
        this.caricoMassimo = caricoMassimo;
        this.modello= modello;
    }
  
}

let camion = new Camion(2000,'volvo');

console.log(camion instanceof Camion)

