addEventListener("DOMContentLoaded", () =>{
    const lblMenu = document.querySelector(".lbl__menu");
    if (lblMenu) {
        lblMenu.addEventListener("click", () =>{
            const menuItems = document.querySelector(".menu__items");
            menuItems.classList.toggle("show");
        })
    }
})

const menu = document.getElementById("menu");
const video = document.querySelector(".video__principal");
const label = document.querySelector(".lbl__menu");


function check() {
    if (menu.checked == false){
        video.style.display = `none`;
    }
    else{
        setTimeout( function aparecer(){
            video.style.display = `block`;
        },250)
    }
}

function aparecer() {
    video.style.display = `block`;
}