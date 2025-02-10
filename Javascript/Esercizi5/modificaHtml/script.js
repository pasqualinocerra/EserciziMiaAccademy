const paragrafo = document.querySelector('p')

paragrafo.innerText = 'ma questo è il nuovo paragrafo!!!';

paragrafo.innerHTML += '<button>clicca qui</button>'

function cambiaStile() {
    paragrafo.style.backgroundColor = 'red';
    paragrafo.style.fontSize = '30px';
}

cambiaStile();