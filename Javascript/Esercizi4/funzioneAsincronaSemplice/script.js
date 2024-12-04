function creaPromessa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promessa è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}

async function usaPromessa() {
    console.log("Inizio dell'attesa...");
    const messaggio = await creaPromessa(); 
    console.log(messaggio); 
}

usaPromessa();
