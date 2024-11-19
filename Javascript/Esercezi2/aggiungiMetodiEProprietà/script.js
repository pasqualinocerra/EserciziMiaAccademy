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
}



