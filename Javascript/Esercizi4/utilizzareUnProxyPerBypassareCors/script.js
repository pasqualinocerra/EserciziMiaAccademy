async function fetchWithProxy() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetApi = 'https://api.spacexdata.com/v4/launches/latest'; 
  
    try {
      
      const response = await fetch(proxyUrl + targetApi, {
        method: 'GET',
        headers: {
          'Origin': 'https://yourfrontend.com',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Dati ricevuti:', data);
    } catch (error) {
      console.error('Errore:', error);
    }
  }
  
  fetchWithProxy();
  