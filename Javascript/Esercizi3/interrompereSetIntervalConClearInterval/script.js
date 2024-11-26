setInterval(() => {
    console.log('questo messaggio verrà stampato ogni secondo')
}, 1000);

setTimeout(() => {
    clearInterval();
    console.log('questo messaggio si interrompe dopo 5 secondi');
}, 5000);