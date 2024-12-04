async function letturaDati() {
    try {
        const lettura = await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');
        const risultato = await lettura.json();
        console.log(risultato)
    } catch (error) {
        console.error('la lettura è errata');
    }
}

letturaDati()