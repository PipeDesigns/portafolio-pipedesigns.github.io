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

const juegoAhorcado = document.querySelector(".juego-ahorcado");
const infoPortafolio = document.getElementById("info__portafolio");
const infoAhorcado = document.getElementById("info__ahorcado");
const infoEncriptador = document.getElementById("info__encriptador");

function cerrar() {
    infoAhorcado.classList.toggle("info__mostrar");
}

function abrirAhorcado() {
    infoAhorcado.classList.toggle("info__mostrar");
}

function abrirPortafolio() {
    infoPortafolio.style.display = "flex";
}

function abrirEncriptador() {
    infoEncriptador.style.display = "flex";
}



// scripts de slider portafolio

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 5000,
        disbaleOnInteraction: false,
    },
    loop: true,
    speed: 1500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
