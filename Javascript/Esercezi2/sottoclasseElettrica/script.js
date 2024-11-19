class Automobile {
    marca=''
    modello=''
    anno=''
    chilometraggio=0

    constructor (marca,modello,anno,chilometraggio){
        this.marca=marca
        this.modello=modello
        this.anno=anno
        this.chilometraggio=chilometraggio
    }

    aggiungiChilometri(Km){
       this.chilometraggio = this.chilometraggio + Km;
    }

    mostraChilometraggio(){
        return this.chilometraggio;
    }

    descrizione(){
        console.log(`questa auto è ${this.marca},il modello è ${this.modello}.E' stata prodotta nel ${this.anno}`)
    };
}

let auto = new Automobile('fiat','punto',1990);

auto.descrizione();

console.log(auto)



class Elettrica extends Automobile{

    autonomia=''

    constructor(marca,modello,anno,chilometraggio,autonomia){
        
        super(marca,modello,anno,chilometraggio);
        
        this.autonomia=autonomia;
    }

    descrizione(){
        console.log(`questa auto è ${this.marca},il modello è ${this.modello}.E' stata prodotta nel ${this.anno}.Ha una autonomia di ${this.autonomia}`)
    };

    ricarica(km){
        this.autonomia += km;
    }
}

let autoElettrica = new Elettrica('fiat','punto',1990,20000,200);

autoElettrica.ricarica();

console.log(autoElettrica);