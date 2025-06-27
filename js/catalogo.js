/Productos de catálogo/
let parametros = new URLSearchParams(window.location.search);
let caturl = parametros.get('cat'); // agarro solo el valor de "cat"
console.log(caturl);

let contenedor = document.querySelector(".product-grid");
let searchBar = document.querySelector("#searchBar");
let selectCategoria = document.querySelector("#filtro-categoria");

function mostrarProductos(productosMassimoDutti) {
  contenedor.innerHTML = ''; 
  for (let producto of productosMassimoDutti) {
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

// si en la URL no hay categoría, muestro todos los productos
if(caturl === null){
  mostrarProductos(productosMassimoDutti);
} else {
  // si sí hay categoría, filtro por esa categoría desde la URL
  filtrarProductosPorUrL(caturl);
  searchBar.value = caturl; // también pongo el valor en la barra de búsqueda
}

function filtrarProductosPorUrL(categoriaDesdeUrl) {
  let cat = categoriaDesdeUrl; 
  console.log(cat);
  let productosFiltrados = [];

  for (let producto of productosMassimoDutti) {
    if (producto.categoria === cat) {
      productosFiltrados.push(producto); 
    }
  }

  mostrarProductos(productosFiltrados);
}

/Filtrar texto/ 
searchBar.addEventListener("input", filtrarProductosPorTexto);

function filtrarProductosPorTexto() {
  let textoIngresado = searchBar.value; 
  let textoMayuscula = ""; 

  // paso letra por letra a mayúscula
  for (let i = 0; i < textoIngresado.length; i++) { 
    textoMayuscula += textoIngresado[i].toUpperCase(); 
  }

  // pongo el texto convertido en el input
  searchBar.value = textoMayuscula;

  // ahora paso a minúscula para comparar (porque el nombre del producto está en minúscula)
  let texto = textoMayuscula.toLowerCase();
  let productosFiltrados = []; 

  for (let producto of productosMassimoDutti) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.includes(texto)) {
      productosFiltrados.push(producto); // si el nombre contiene ese texto, lo agrego
    }
  }

  mostrarProductos(productosFiltrados);
}

/Filtro por select/
selectCategoria.addEventListener("change", filtrarProductosCategoria)

function filtrarProductosCategoria() {
  let cat = selectCategoria.value;

  if (cat === "todos") {
    mostrarProductos(productosMassimoDutti);
  } else {
    let productosFiltrados = [];
    for (let producto of productosMassimoDutti) {
      if (producto.categoria === cat) {
        productosFiltrados.push(producto);
      }
    }
    mostrarProductos(productosFiltrados);
  }
}