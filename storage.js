class Storage{          

   static saveData(data){                // in una classe statica non si usa mai il costruttore
      const dataString = JSON.stringify(data);
      localStorage.setItem('beverages', dataString);
   }


   static loadData(){
      const dataString = localStorage.getItem('beverages');
      if (dataString) {
         const data = JSON.parse(dataString);
         return data;
      }
     return null;
   }


}



// quando una classe non ha proprietà diverse ad esempio due storage sono uguali ed è una classe statica