class Cellar{

  constructor(beveragesArray = []){
    this.beveragesArray = beveragesArray;
  }
   
  addBeverage(bev){
    this.beveragesArray.push(bev);
  }

  deleteBeverage(index){
    this.beveragesArray.splice(index, 1);
  }

  getAllBeverages(){

    let allBeverages = '';

    for (let i = 0; i < this.beveragesArray.length; i++) {
        const bev = this.beveragesArray[i];
        const humanIndex = i + 1;

        allBeverages += humanIndex + ') ' + bev.toString();
        allBeverages += '-------------------------------\n';
        
    }
    return allBeverages;
  }

}