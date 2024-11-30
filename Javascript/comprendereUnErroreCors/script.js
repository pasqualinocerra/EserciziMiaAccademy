function nuovaRichiesta() {
    fetch('https://api.spacexdata.com')
    .then(response => {
        return response.json(); 
      })
      .then(data => {
        console.log('Dati ricevuti:', data);
      })
      .catch(error => {
        console.error('Errore:', error);
      });

}

nuovaRichiesta()