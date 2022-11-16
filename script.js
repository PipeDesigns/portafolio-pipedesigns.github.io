addEventListener("DOMContentLoaded", () =>{
    const lblMenu = document.querySelector(".lbl__menu");
    if (lblMenu) {
        lblMenu.addEventListener("click", () =>{
            const menuItems = document.querySelector(".menu__items");
            menuItems.classList.toggle("show");
        })
    }
})

// const inicio = document.querySelector (".inicio");
// const sobreMi = document.querySelector (".sobre-mi");


// function sobre_mi(){
//     inicio.classList.remove("active");
// }