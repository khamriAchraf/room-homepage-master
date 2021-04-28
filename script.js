var arrows = document.querySelectorAll(".arrow");
var hero = document.querySelectorAll(".hero");
AOS.init();
function mouseIn() {
    for (i = 0; i < arrows.length; ++i) {
        arrows[i].classList.add('arrow-hover');
        hero[i].classList.add("hero-hover");
    }

}

function mouseOut() {
    for (i = 0; i < arrows.length; ++i) {
        arrows[i].classList.remove('arrow-hover');
        hero[i].classList.remove("hero-hover");
    }
    
}