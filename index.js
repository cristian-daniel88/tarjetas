const cartas = document.querySelectorAll(".memoria-card");
const boton = document.getElementById('boton');
const contador = document.getElementById('contador');
const contenedorAciertos = document.getElementById('contenedor-aciertos')

let tableroBloqueado = false 
let arrancaste = false;
let primeraCarta, segundaCarta;
let chances = 12;
let aciertos = 0;

function girar() {
 
  if (tableroBloqueado) return;




  if (this === primeraCarta) return;


  this.classList.add("girar");

  if (!arrancaste) {
    arrancaste = true;
    primeraCarta = this;

    return;
  }

  arrancaste = false;
  segundaCarta = this;

  comprobarCoincidencia();
}

function comprobarCoincidencia() {
  let coincidencia =
    primeraCarta.dataset.participante === segundaCarta.dataset.participante;

  coincidencia ? deshabilitarCartas() : devolverCartas();
}

function deshabilitarCartas() {
  primeraCarta.removeEventListener("click", girar);
  segundaCarta.removeEventListener("click", girar);
  primeraCarta = null;
  segundaCarta = null;
  aciertos++;
  contenedorAciertos.innerHTML = `<p>${aciertos} aciertos</p>`
}



function devolverCartas() {
    tableroBloqueado = true;
    chances--;
    contador.textContent = chances;
    if (chances === 0) {
      alert('perdiste');
      segundaCarta.classList.remove("girar");
      primeraCarta.classList.remove("girar");
      primeraCarta = null;
      segundaCarta = null;
      
     return
    
    }
  setTimeout(() => {
    tableroBloqueado = false
    primeraCarta.classList.remove("girar");
    segundaCarta.classList.remove("girar");
    primeraCarta = null;
    segundaCarta = null;
  }, 700);
}

function cartasClickeables() {
  cartas.forEach((carta) => carta.addEventListener("click", girar));
  mezclarCartas();  
}

cartasClickeables();

function mezclarCartas () {
    cartas.forEach(element => {
        let numeroRandom = Math.floor(Math.random() * 12);
        element.style.order = numeroRandom;
    });
}

// boton mezclar
boton.addEventListener('click', mezclar)

function mezclar() {
  
  window.addEventListener(DOMContentLoaded , () => {})
}
// Corregir Bug
// Hacer el random



