const $button = document.querySelector('#btn')

$button.addEventListener('click', function () {
    const $nome = document.querySelector('#nome').value.trim();
    const $cognome = document.querySelector('#cognome').value.trim();
    const $email = document.querySelector('#email').value.trim();
    const $password = document.querySelector('#password').value.trim();

    console.log('nome :', $nome)
    console.log('cognome :', $cognome)
    console.log('email :', $email)
    console.log('password :', $password)

     if (!$nome || !$cognome || !$email || !$password) {
        alert('Ti ho beccato!! Non fare il furbetto,compila tutti i campi')
     }
   
    // if ($nome && $cognome && $email && $password) {
    //     alert('login riuscito')
    // }else if (($nome && $cognome) && !($email && $password)){
    //     alert('login riuscito')
            
    // }else if (!($nome && $cognome) && ($email && $password)){
    //         alert('login riuscito')
    // }else {
    //         alert ('login non riuscito')
    // }

})