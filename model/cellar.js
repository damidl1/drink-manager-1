class Cellar {
  constructor(beverageArray = []) {
    this.beverageArray = beverageArray;
  }

  get beverageCount(){   // usiamo un getter per simulare che ci sia una proprietà ma invece è una funzione
    const count = this.beverageArray.length;
    return count;
  }

  getAllBeverages() {
    let allBeveragesString = '';

    for (let i = 0; i < this.beverageArray.length; i++) {
      const element = this.beverageArray[i];
      const humanIndex = i + 1;
      allBeveragesString += humanIndex + ') ' + element.toString();
      allBeveragesString += '------------------------\n';
    }
    return allBeveragesString;
  }

  addBeverage(beverage) {
    this.beverageArray.push(beverage);
  }

  removeBeverage(i) {
    this.beverageArray.splice(i, 1);
  }

  static fromDbObject(data){
      
    const tempArray = [];

    for (const genericObject of data) {
      if (genericObject.region) {
        const wine = new Wine(genericObject.name, genericObject.maker, genericObject._dop, genericObject.vol, genericObject.type, genericObject.region, genericObject.vine);
        tempArray.push(wine);
      } else {
        const beer = new Beer(genericObject.name, genericObject.maker, genericObject._dop, genericObject.vol, genericObject.type, genericObject.malt);
        tempArray.push(beer);      
      }
    }

    const newCellar = new Cellar(tempArray);
    
    return newCellar;
 }
}