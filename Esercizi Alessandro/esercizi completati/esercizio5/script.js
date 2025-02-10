const $containers = document.querySelectorAll('.container');
const $paragrafi = document.querySelectorAll('.par');

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("container")) {
        const clickedContainer = event.target; 

        $paragrafi.forEach(par => {
            par.style.display = "none";
        });

        const paragrafoAssociato = clickedContainer.querySelector(".par");
        if (paragrafoAssociato) {
            paragrafoAssociato.style.display = "block";
        }
    }
});

