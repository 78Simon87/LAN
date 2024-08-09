const menu = document.querySelector(".btn");
const barraLateral = document.querySelector(".navegacion");
const desopacar = document.querySelector(".opacar");

menu.addEventListener("click",()=>{
    desopacar.classList.toggle("desopacar");
    barraLateral.classList.toggle("barra");
})

const bottonAlert = document.getElementById("alert");
// Define la función que se ejecutará cuando el botón sea clickeado
bottonAlert.addEventListener("click", ()=>{
    alert("Has click en aceptar para enviar el formulario");
})