class Automobile {
    marca=''
    modello=''
    anno=''

    constructor (marca,modello,anno){
        this.marca=marca
        this.modello=modello
        this.anno=anno
    }
    
    descrizione(){
        console.log(`questa auto è ${this.marca},il modello è ${this.modello}.E' stata prodotta nel ${this.anno}. IL suo carico massimo è ${this.caricoMassimo}.`)
    };

}

let auto = new Automobile('fiat','punto',1990);



class Camion extends Automobile {
    
    constructor(marca,modello,anno,caricoMassimo){

        super(marca,modello,anno);
        this.caricoMassimo = caricoMassimo;
    }

    carica(kg){
        this.caricoMassimo += kg;
        if (this.caricoMassimo += kg) {
            console.log('superato il carico massimo')
        }
        else if (this.caricoMassimo <kg){
            console.log('carico ottimale')
        } 
    }
}

let camion = new Camion('fiat','punto',1990,0);

camion.carica(0)

console.log(camion)

