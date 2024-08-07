const menu = document.querySelector(".btn");
const barraLateral = document.querySelector(".navegacion");
const desopacar = document.querySelector(".opacar");

menu.addEventListener("click",()=>{
    desopacar.classList.toggle("desopacar");
    barraLateral.classList.toggle("barra");
})

