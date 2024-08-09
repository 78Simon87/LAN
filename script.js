const menu = document.querySelector(".btn");
const barraLateral = document.querySelector(".navegacion");
const desopacar = document.querySelector(".opacar");

menu.addEventListener("click",()=>{
    desopacar.classList.toggle("desopacar");
    barraLateral.classList.toggle("barra");
})


// script.js
const images = [
    'imagenes-herramientas/fondo-3.jpg',
    'imagenes-herramientas/fondo-imag.png',
    'imagenes-herramientas/',
    'imagenes-herramientas/'
];

let currentIndex = 0;
const slideshow = document.getElementById('slideshow');
const interval = 6000; // Intervalo en milisegundos (5000 ms = 5 segundos)
let autoChangeInterval;

function showImage(index) {
    slideshow.style.backgroundImage = `url(${images[index]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function startAutoChange() {
    autoChangeInterval = setInterval(nextImage, interval);
}

function stopAutoChange() {
    clearInterval(autoChangeInterval);
}

// Eventos de los botones
document.getElementById('nextBtn').addEventListener('click', () => {
    stopAutoChange(); // Detiene el cambio automático al interactuar
    nextImage();
    startAutoChange(); // Reinicia el cambio automático
});

document.getElementById('prevBtn').addEventListener('click', () => {
    stopAutoChange(); // Detiene el cambio automático al interactuar
    prevImage();
    startAutoChange(); // Reinicia el cambio automático
});

// Mostrar la primera imagen al cargar
showImage(currentIndex);
startAutoChange(); // Inicia el cambio automático al cargar


// Seleccionar todos los h2 dentro del contenedor .animation-text
const headers = document.querySelectorAll('.animation-text h2');
let textAnimation = 0; // Cambiado de currentIndex a textAnimation

function showNextHeader() {
    // Ocultar el header actual
    headers[textAnimation].style.opacity = '0';

    // Calcular el próximo índice
    textAnimation = (textAnimation + 1) % headers.length;

    // Mostrar el siguiente header
    headers[textAnimation].style.opacity = '1';
}

// Inicializar el primer header
headers[textAnimation].style.opacity = '1';

// Cambiar el texto cada 6 segundos
setInterval(showNextHeader, 6000); // 6000 ms = 6 s