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

    #calcolaEtà(){
      let età = 2024-this.anno;
      return età
    }

     mostraEtà(){
        return this.#calcolaEtà();
    }

    _controllaChilometri(){
        if (this.chilometraggio > 100000) {
            console.log('questa auto supera i 100000km')
        } 
    }

    static controllaChilometraggio(auto1,auto2){
        if (auto1 > auto2) {
            console.log('auto1 ha un chilometraggio maggiore')
        }
        else if (auto1 < auto2) {
            console.log('auto2 ha un chilometraggio maggiore')
        } else {
            console.log('il chilometraggio è uguale')
        }
    }
}

let auto = new Automobile('fiat','punto',1990,20000);

console.log(auto.mostraEtà())

console.log(Automobile.controllaChilometraggio())

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

autoElettrica._controllaChilometri();

 console.log(autoElettrica);