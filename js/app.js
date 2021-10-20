/* Se definen los objetos en JavaScript para
   agregarle funcionalidades, como abrir y cerrar
   el menú en los dispositivos móviles.*/

const menu = document.querySelector(".nav-right")
const openMenuBtn = document.querySelector(".open-menu")
const closeMenuBtn = document.querySelector(".close-menu")


/* Función toggle para que cuando esté el menú 
   cerrado lo abra y cuando esté abierto lo 
   cierre
   Esto se aplica al objeto de clase .menu-opened*/

function toggleMenu() {
    menu.classList.toggle("menu-opened");
}

/* Posteriormente se añade el evento "click
   para así vincularlo con la función toggle.*/

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);