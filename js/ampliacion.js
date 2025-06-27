let parametros = new URLSearchParams(window.location.search);
let identificador = parametros.get('id'); // guardo solo el valor de "id"

// Busco el producto que tenga ese ID
let producto = null;
for (productoactual of productosMassimoDutti) {
    if (identificador == productoactual.id) {
        producto = productoactual;
    }
}

document.querySelector('#nombre-producto').textContent = producto.nombre;
document.querySelector('#imagen-producto').src = producto.imagenes[0];
document.querySelector('#descripcion-producto').innerHTML = producto.descripcion;
document.querySelector('#color-principal').innerHTML = producto.colores;

if (producto.referencia) { // si tiene referencia, la muestro
    document.querySelector('#modelo-info').innerHTML = producto.referencia;
}

document.querySelector('#codigo-producto').innerHTML = producto.codigo;

const talleContenedor = document.querySelector('#talles');

/Talles/
// si tiene talles, los muestro
let talle = producto.tallas;
talleContenedor.innerHTML = "";
if (producto.tallas) {
    for (let i = 0; i < producto.tallas.length; i++) {
        talleContenedor.innerHTML += `<span>${producto.tallas[i]}</span>`;
    }
}

/ Botón que cambia texto cuando paso el mouse/
const boton = document.getElementById("btncesta");

boton.addEventListener("mouseover", () => {
    if (producto.tallas) {
        boton.textContent = "Seleccionar talla";
    }
});

boton.addEventListener("mouseout", () => {
    if (producto.tallas) {
        boton.textContent = "Añadir a la cesta"; 
    }
});

/Producto nuevo/
if (producto.nuevo === true) {
    document.querySelector("#nuevo").innerText = "Nuevo";
}

/productos sugeridos por época/ 
let contenedor = document.querySelector(".product-grid");

function mostrarProductos(productos) {
    contenedor.innerHTML = '';

    // filtro por época
    let epocaActual = producto.epoca;
    let productosSugerencias = productos.filter(p => p.epoca === epocaActual && p.id !== producto.id);

    let primerosCinco = productosSugerencias.slice(0, 5);

    for (let p of primerosCinco) {
        contenedor.innerHTML += `
        <div class="product-card">
            <a href="ampliacion.html?id=${p.id}">  
                <img src="${p.imagenes[0]}" alt="${p.nombre}" class="product-image">
            </a>
            <div class="product-info">
                <h2>${p.nombre}</h2>
                <p>${p.precio}</p>
            </div>
        </div>
        `;
    }
}

mostrarProductos(productosMassimoDutti);

/ampliacion img galeria/
document.querySelector("#imagen0").src = producto.imagenes.at(1)
document.querySelector("#imagen1").src = producto.imagenes.at(2)
document.querySelector("#imagen2").src = producto.imagenes.at(3)
document.querySelector("#imagen3").src = producto.imagenes.at(0)

let imageGallery = document.querySelectorAll(".productGallery img")

for(let img of imageGallery){
    img.addEventListener('click', cambiarImagen)
}

function cambiarImagen(){
   document.querySelector("#imagen-producto").src = this.src
}
