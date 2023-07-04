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

    const allBeverages = getAllBeverages();
    alert(allBeverages);

  }


}