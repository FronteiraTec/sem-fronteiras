window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("PassouDaImagem", window.scrollY > 1000);
})