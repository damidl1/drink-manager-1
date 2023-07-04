class GUI{

  constructor(){

   this.cellar = new Cellar();

   
    
  }
 
  start(){
    
    while (true) {
        
      const firstChoice = prompt('Cosa vuoi fare? \n' +
        'Digita 1) Guarda la lista delle bevande\n' +
        'Digita 2) Aggiungi una bevanda\n' +
        'Digita 3) Rimuovi una bevanda\n' +
        'Digita 4 per chiudere il programma\n' +
        'Digita ora la tua scelta: ');

        if (firstChoice === '1') {
            this.showBeverages();
        } else if (firstChoice === '2'){
            this.addBeverage();
        } else if (firstChoice === '3'){
            this.deleteBeverage();
        } else if (firstChoice === '4'){
            break;
        } else {
            alert('hai sbagliato ad inserire il numero');
        }

    }

  }

  showBeverages(){

    const allBeverages = this.cellar.getAllBeverages();
    alert(allBeverages);

  }

  addBeverage(){

   const name = prompt('Inserisci il nome della bevanda: ');
   const maker = prompt('Inserisci il produttore: ');
   const dop = prompt('Inserisci la data di produzione in formato yyyy: ');
   const vol = prompt('Inserisci la gradazione alcolica del prodotto: ');
   const type = prompt('Inserisci il tipo di bevanda: ');
   
  const beverage = new Beverage(name, maker, dop, vol, type);

  this.cellar.addBeverage();
   
  }


}