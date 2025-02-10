const bottone = document.querySelector('.btn')

bottone.addEventListener('click',function () {
    const nome = document.querySelector('#nome').value;
    const cognome = document.querySelector('#cognome').value;

    if (!nome || !cognome) {
        alert('compila il campo vuoto')
    } else{
        alert('i campi sono stati compilati perfettamente,bravo!')
    }
})