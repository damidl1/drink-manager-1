class Beer extends Beverage {
    
    constructor(name, maker, dop, vol, type, malt){
        super(name, maker, dop, vol, type);
        this.malt = malt;
      
    }


    toString(){
       return 'Birra:\n' + super.toString() +
       'Malto: ' + this.malt + '\n';
    }

}