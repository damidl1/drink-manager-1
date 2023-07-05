class Beverage {


    constructor(name, maker, dop, vol, type){
        this.name = name;
        this.maker = maker;
        this.dop = dop; // quando uso questo viene chiamata funzione setter
        this.vol = vol;
        this.type = type;
    }

    set dop(value){
        if (value === null) {  // per gestire errore in caso la data sia null
            this._dop = new Date(); // per creare una proprietà protetta con this._dop
        } else if (value.includes('/')) {
            const dopArray = value.split('/');
            const year = parseInt(dopArray[2]);         
            const month = parseInt(dopArray[1]) -1;
            const day = parseInt(dopArray[0]);
            this._dop = new Date(year, month, day);
            
        } else {
            this._dop = new Date(value);
        }
    }

    get dop(){
        return this._dop.toISOString();
    }

    toString(){
        const card = 'Nome: ' + this.name + '\n' +
                     'Produttore: ' + this.maker + '\n'+
                     'Data: ' + this.dop + '\n' +
                     'Gradazione Alcolica: ' + this.vol + '% \n' + 
                     'Tipologia: ' + this.type +'\n';
        
            return card;
    }

}

