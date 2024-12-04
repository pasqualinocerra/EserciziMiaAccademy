function salvaDati(responseBody){
   fetch('https://jsonplaceholder.typicode.com/posts',{
      method : 'POST',
      body : JSON.stringify(responseBody),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
       }
   }).then((response) => response.json())
   .then((json) => console.log(json));
}

salvaDati({
   title : 'inizio',
   body : 'testo',
   userId : 100
})
