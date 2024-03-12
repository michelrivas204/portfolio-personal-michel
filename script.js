

const abacate = document.querySelector(".texto-sobre")

const visible = document.querySelector(".texto-parte2")

const arrow = document.querySelector(".bx-up-arrow-circle")

const buton = document.querySelector(".read-more")

console.log(buton)


function VerText() {

    visible.style.display ="block"
    arrow.style.display ="block"
    buton.style.display = "none"
    abacate.style.display = "none"


}
arrow.addEventListener("click", () => {

    visible.style.display ="none"
    arrow.style.display ="none"
    buton.style.display = "block"
    abacate.style.display = "block"

    

})

