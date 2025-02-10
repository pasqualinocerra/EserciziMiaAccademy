sessionStorage.setItem('utente','mario rossi');
localStorage.setItem('password', '******');

console.log(sessionStorage.getItem('utente'))
console.log(localStorage.getItem('password'))

sessionStorage.removeItem('utente')
localStorage.removeItem('password')

console.log(sessionStorage.getItem('utente'))
console.log(localStorage.getItem('password'))