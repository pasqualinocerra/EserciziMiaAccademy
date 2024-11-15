class Automobile {
    marca=''
    modello=''
    anno=''
    chilometraggio=0
    #contatoreChiamate=0

    constructor (marca,modello,anno,chilometraggio,){
        this.marca=marca
        this.modello=modello
        this.anno=anno
        this.chilometraggio=chilometraggio
        this.#contatoreChiamate=this.#contatoreChiamate
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

    #calcolaEtà(){
      let età = 2024-this.anno;
      return età
    }

     mostraEtà(){
        return this.#calcolaEtà();
    }
}

let auto = new Automobile('fiat','punto',1990);

console.log(auto.mostraEtà())

 Automobile.prototype.saluta = function(){
    return `ciao, questa auto è una ${this.marca},modello ${this.modello}`;
 }

 auto.descrizione();


 console.log(auto.saluta())

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

autoElettrica.ricarica(100);

 console.log(autoElettrica);

