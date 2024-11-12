class Automobile {
    #marca;
    modello;
    anno;

    
    constructor(marca, modello, anno) {
        this.#marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    

    getMarca() {
        return this.#marca;
    }

    setMarca(valore) {
        this.#marca = valore;
    }

}