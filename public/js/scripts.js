var alturaDoBanner = document.querySelector(".imagemBanner").clientHeight;
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("PassouDaImagem", window.scrollY > alturaDoBanner);
})

var checkbox = document.getElementById("check");
var minhasopcoesdemenu = document.getElementById("PrecisoParajs");

if (checkbox.checked == false) {
    minhasopcoesdemenu.style.left = "-100%";
}

function MeuBotaoMenu() {
    var checkbox = document.getElementById("check");
    var minhasopcoesdemenu = document.getElementById("PrecisoParajs");

    if (checkbox.checked == true) {
        minhasopcoesdemenu.style.left = "0vw";
    } else {
        minhasopcoesdemenu.style.left = "-50vw";
    }

}

const menuItens = document.querySelectorAll('header a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener("click", AlteraALturaClick);
})

const textobanner = document.querySelector(".button-avaliacao");
textobanner.addEventListener("click", AlteraALturaClick);


function AlteraALturaClick(event) {
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    window.scroll({
        top: section - 120,
        behavior: "smooth",
    });
    checkbox.checked = false;
    minhasopcoesdemenu.style.left = "-100%";
}