const button = document.querySelector('#button');
const output = document.querySelector('#output');
const testo = document.querySelector('#testo');



button.addEventListener('click', function() {
    const valoreTesto = testo.value; 
    if (valoreTesto) {
        alert(`Ciao, ${valoreTesto}!`); 
    } else {
        alert('Errore: il campo di testo è vuoto. Inserisci una parola.');
    }
});


testo.addEventListener('input', () => {
    output.textContent = testo.value || 'Il tuo testo apparirà qui';
});

