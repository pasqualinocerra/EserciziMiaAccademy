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
        console.log(`questa auto è ${this.marca},il modello è ${this.modello}.E' stata prodotta nel ${this.anno}`)
    };
}

let auto = new Automobile('fiat','punto',1990);

auto.descrizione();

console.log(auto)