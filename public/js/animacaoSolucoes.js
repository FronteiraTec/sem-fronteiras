const [...cards] = document.querySelectorAll(".card");

console.log(cards)

cards.forEach(element => {

    element.addEventListener("click", function(e) {
        element.classList.toggle('is-flipped');
    });

})