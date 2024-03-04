

const menubar = document.querySelector(".menu-bar");
let menuAria = document.querySelector(".menu-area");
menubar.addEventListener("click",()=>{
    menubar.classList.toggle("active");
    menuAria.classList.toggle("active-menu");

})