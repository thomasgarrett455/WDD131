const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");

}

menuButton.addEventListener("click", toggleMenu);

function handleResize(){
    const element = document.querySelector(".menu-button")
    if (window.innerWidth > 1000){
        element.classList.remove("hide");
    }
    else{
        element.classList.add("hide");
    }
    }
handleResize()

window.addEventListener("resize", handleResize);
