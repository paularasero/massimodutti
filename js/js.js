/Slider/
// Acá tengo un array con las imágenes que quiero que vayan rotando en el slider
const imagenes = [
  "img/Slider3.png",
  "img/Slider4.png",
  "img/Slider5.png",
  "img/Slider7.png",
  "img/Slider6.png",
];

let slider = document.querySelector("#slider");

let indice = 0;

function mostrarImg() {
  slider.classList.remove("aparecer");
  slider.classList.add("desvanecer");  

  setTimeout(() => { 
    slider.src = imagenes[indice]; // cambio la imagen
    slider.classList.remove("desvanecer"); 
    slider.classList.add("aparecer"); 
  }, 600);
}

// Variable para guardar el intervalo
let intervalo;

function iniciarSlider() {
  intervalo = setInterval(() => { 
    if (indice === imagenes.length - 1) {
      indice = 0; // si llega al final, vuelvo al principio
    } else {
      indice++; // si no, paso a la siguiente
    }
    mostrarImg();
  }, 4000);
}

function pausarSlider() {
  clearInterval(intervalo);
}

slider.addEventListener("mouseenter", pausarSlider);

slider.addEventListener("mouseleave", iniciarSlider);

// Esto hace que arranque el slider solo cuando se carga la página
iniciarSlider();

/Modal/
let modalContenedor = document.querySelector(".modal-contenedor");
let btnCerrar = document.querySelector(".boton-cerrar");
let imagenModal = document.querySelector(".imagen-modal");

function abrirModal() {
  modalContenedor.classList.add("active");
  imagenModal.style.backgroundImage = setearImgRandom(imgModal);
}

function cerrarModal() {
  modalContenedor.classList.remove("active");
}

function clicAfueraDelModal(event) {
  if (event.target === modalContenedor) {
    cerrarModal();
  }
}

// Eventos para cerrar el modal con el botón o haciendo clic afuera
btnCerrar.addEventListener("click", cerrarModal);
modalContenedor.addEventListener("click", clicAfueraDelModal);

function obtenerImagenes(array) {
  let imagenes = [];

  for (let i = 0; i < array.length; i++) {
    imagenes.push(array[i].imagen);
  }

  return imagenes;
}

/Input mail de modal/
document.querySelector(".btn-suscribir").addEventListener("click", validarEmail);

function validarEmail() {
  let inputEmail = document.querySelector("#inputEmail");
  let email = inputEmail.value;
  let mensajeEmail = document.querySelector("#mensajeEmail");

  if (email.indexOf("@") === -1 && email.indexOf(".com") === -1) {
    mensajeEmail.innerHTML = "Falta @ y .com";
    mensajeEmail.classList.add("error");
  } else if (email.indexOf("@") === -1) {
    mensajeEmail.innerHTML = "Falta @";
    mensajeEmail.classList.add("error");
  } else if (email.indexOf(".com") === -1) {
    mensajeEmail.innerHTML = "Falta .com";
    mensajeEmail.classList.add("error");
  } else {
    mensajeEmail.innerHTML = "";
    inputEmail.classList.add("input-correcto");
  }
}

function setearImgRandom(array) {
  let urlimgModal = obtenerImagenes(array);
  let index = Math.floor(Math.random() * urlimgModal.length);
  return `url(${urlimgModal.at(index)})`;
}

setTimeout(abrirModal, 1500);

/CONTADOR HACIA ATRÁS/
// Estas constantes son para que el contador sea más legible
const MILISEGUNDOS_POR_SEGUNDO = 1000;
const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;
const HORAS_POR_DIA = 24;

const SEGUNDOS_POR_HORA = SEGUNDOS_POR_MINUTO * MINUTOS_POR_HORA;
const SEGUNDOS_POR_DIA = SEGUNDOS_POR_HORA * HORAS_POR_DIA;

let descuento = new Date("2025-06-20T23:00:00");

function actualizarContador() {
  let ahora = new Date();
  let diferencia = descuento - ahora;

  if (diferencia <= 0) {

  }

  let totalSegundos = Math.floor(diferencia / MILISEGUNDOS_POR_SEGUNDO);
  let dias = Math.floor(totalSegundos / SEGUNDOS_POR_DIA);
  let horas = Math.floor((totalSegundos % SEGUNDOS_POR_DIA) / SEGUNDOS_POR_HORA);
  let minutos = Math.floor((totalSegundos % SEGUNDOS_POR_HORA) / SEGUNDOS_POR_MINUTO);
  let segundos = totalSegundos % SEGUNDOS_POR_MINUTO;

  // Actualizo el contenido del contador con los valores calculados
  document.querySelector('#countdown').textContent = `${dias}d · ${horas}h · ${minutos}m · ${segundos}s`;
}

let intervaloContador;
intervaloContador = setInterval(actualizarContador, 1000);
actualizarContador();

/Nueva colección/
let contenedor = document.querySelector(".product-grid");

function mostrarProductos(productos) {
  contenedor.innerHTML = ''; // Limpio el contenedor por si había algo antes

  let productosNuevos = productos.filter(producto => producto.nuevo === true);

  let primerosCinco = productosNuevos.slice(0, 5);

  for (let producto of primerosCinco) {
    contenedor.innerHTML += `
    <div class="product-card">
      <a href="ampliacion.html?id=${producto.id}">  
        <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="product-image">
      </a>
      <div class="product-info">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}</p>
      </div>
    </div>
    `;
  }
}

mostrarProductos(productosMassimoDutti);
