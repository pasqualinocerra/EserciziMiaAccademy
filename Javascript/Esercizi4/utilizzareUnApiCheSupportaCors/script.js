async function fetchNASAData() {
    const apiKey = 'DEMO_KEY';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Dati ricevuti:', data); 
    } catch (error) {
      console.error('Errore:', error);
    }
  }
  
  fetchNASAData();
  