window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("PassouDaImagem", window.scrollY > 650);
    //passou de 1000px de altura, a classe do header vai para .PassouDaImagem{}
})