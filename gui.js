class GUI{

  constructor(){

  const data = Storage.loadData();
  if (data !== null) {
    this.cellar = Cellar.fromDbObject(data);
  } else {
    this.cellar = new Cellar();
  }

}
 
  start(){
    
    while (true) {
        
      const firstChoice = prompt('Ciao utente, la nostra cantina ha a disposizione ' + this.cellar.beverageCount + ' bevande.\n' +
        'Cosa vuoi fare? \n' +
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
            this.removeBeverage();
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

   const insertChoice = prompt('Vuoi inserire una birra o un vino?');

   if (insertChoice !== 'birra' && insertChoice !== 'vino') {
      alert('non puoi inserire altri tipi di bevande');
      return;
   }
   
   const name = prompt('Inserisci il nome della bevanda: ');
   const maker = prompt('Inserisci il produttore: ');
   const dop = prompt('Inserisci la data di produzione in formato gg/mm/yyyy: ');
   const vol = parseInt(prompt('Inserisci la gradazione alcolica del prodotto: '));
   const type = prompt('Inserisci il tipo di bevanda: ');


   if (insertChoice === 'birra') {
    const malt = prompt('Inserisci il tipo di malto');
    const beer = new Beer(name, maker, dop, vol, type, malt);
    this.cellar.addBeverage(beer);
    
   } else {
    const region = prompt('Inserisci la regione');
    const vine = prompt('Inserisci il vitigno');
    const wine = new Wine(name, maker, dop, vol, type, region, vine);
    this.cellar.addBeverage(wine);
   }

   Storage.saveData(this.cellar.beverageArray);
   
  }

  removeBeverage(){

    const humanIndex = prompt('Inserisci il numero della bevanda da eliminare');
    const i = humanIndex -1;  // l'indice umano parte da 1 quindi mettiamo -1 per dire allo splice di eliminare l'index della macchina che parte da 0
    this.cellar.removeBeverage(i);

    Storage.saveData(this.cellar.beverageArray);  // viene evocato Storage direttamente come facciamo con Math ad esempio perchè classe statica
  }


}

  


