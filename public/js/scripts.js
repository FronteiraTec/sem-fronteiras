var alturaDoBanner = document.querySelector(".imagemBanner").clientHeight;
console.log(alturaDoBanner)
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("PassouDaImagem", window.scrollY > alturaDoBanner);
})

var checkbox = document.getElementById("check");
var minhasopcoesdemenu = document.getElementById("PrecisoParajs");

if(checkbox.checked == false){
    minhasopcoesdemenu.style.left = "-100%";
}
function MeuBotaoMenu(){
    var checkbox = document.getElementById("check");
    var minhasopcoesdemenu = document.getElementById("PrecisoParajs");

    if(checkbox.checked == true){
        minhasopcoesdemenu.style.left = "60vw";
    }else{
        minhasopcoesdemenu.style.left = "-100vw";
    }
   
}

const menuItens = document.querySelectorAll('header a[href^="#"]');

menuItens.forEach(item =>{
    item.addEventListener("click" ,AlteraALturaClick);
})

function AlteraALturaClick(event){
    event.preventDefault();
    const elemento =  event.target;
    const id = elemento.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    window.scroll({
        top:section-100,
        behavior:"smooth",
    });
    checkbox.checked = false;
    minhasopcoesdemenu.style.left = "-100%";
}

