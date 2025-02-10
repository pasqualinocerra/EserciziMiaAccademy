const $login = document.querySelector('#loginForm')
const $email = document.querySelector('#email')
const $password = document.querySelector('#password')


$login.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = $email.value;
    const password = $password.value; 

    console.log('Email:', email);
    console.log('Password:', password);
});

