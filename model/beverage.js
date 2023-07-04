class Beverage {


    constructor(name, maker, dop, vol, type){
        this.name = name;
        this.maker = maker;
        this.dop = dop;
        this.vol = vol;
        this.type = type;
    }

    toString(){
        const card = 'Nome:' + this.name + '\n' +
                     'Produttore:' + this.maker + '\n'+
                     'Dop: ' + this.dop + '\n' +
                     'Gradazione: ' + this.vol + '\n' + 
                     'Tipo: ' + this.type +'\n';
        return card;
    }



}

