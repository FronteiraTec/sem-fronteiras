const [...cards] = document.querySelectorAll(".card");

console.log(cards)

cards.forEach(element => {

    element.addEventListener("mouseover", function(e) {
        element.classList.toggle('is-flipped');
        isHover = true;
    });

    element.addEventListener("mouseout", function(e) {
        element.classList.remove("is-flipped");
    });

})