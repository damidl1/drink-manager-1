class Beer extends Beverage {
    
    constructor(name, maker, dop, vol, type, malt){
        super(name, maker, dop, vol, type);
        this.malt = malt;
      
    }


    toString(){
        const card = super.toString() +
                    'Malto: ' + this.malt;
        return card;
    }



}