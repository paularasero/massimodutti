/Input Nombre completo/
// Cuando hago click en el botón de suscribirse, se activa la función para contar palabras
document.querySelector(".btn-suscribir").addEventListener("click", contarPalabras);

function contarPalabras() {
  // agarro el input del nombre
  let inputNombre = document.querySelector("#nombre");
  let texto = inputNombre.value;
  let contador = 1;

  // si el campo no está vacío, cuento cuántos espacios hay
  if (texto !== "") {
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) === " ") {
        contador++;
      }
    }
  }

  let mensajeTexto = document.querySelector("#mensajeNombre");

  if (contador < 2) {
    document.querySelector("#mensajeNombre").innerHTML =
      "Mínimo se necesitan 2 palabras";
    mensajeTexto.classList.add("error");
    mensajeTexto.classList.remove("correcto");
  } else {
    document.querySelector("#mensajeNombre").innerHTML = "";
    inputNombre.classList.add("input-correcto");
  }
}

/Input mail/
document.querySelector(".btn-suscribir").addEventListener("click", validarEmail);

function validarEmail() {
  let inputEmail = document.querySelector("#email");
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

/Input celular/
document.querySelector(".btn-suscribir").addEventListener("click", numeroCelular);

function numeroCelular() {
  let inputCelular = document.querySelector("#celular");
  let celular = inputCelular.value;
  let mensajeCelular = document.querySelector("#mensajeCelular");
  let numeros = "0123456789";

  // Prueba que solo tenga números
  for (let i = 0; i < celular.length; i++) {
    if (numeros.indexOf(celular[i]) === -1) {
      mensajeCelular.innerHTML = "Solo se permiten números";
      mensajeCelular.classList.add("error");
      return; // sale de la función si hay un caracter no válido
    }
  }

  if (celular.length < 9) {
    mensajeCelular.innerHTML = "El número debe tener al menos 9 dígitos";
    mensajeCelular.classList.add("error");
  } else {
    mensajeCelular.innerHTML = "";
    inputCelular.classList.add("input-correcto");
  }
}

/Campos obligatorios/
document.querySelector(".btn-suscribir").addEventListener("click", camposObligatorios);

function camposObligatorios() {
  // ASUNTO
  let inputAsunto = document.querySelector("#asunto");
  let asunto = inputAsunto.value;
  let mensajeAsunto = document.querySelector("#mensajeAsunto");

  if (asunto === "") {
    mensajeAsunto.innerHTML = "Este campo es obligatorio";
    mensajeAsunto.classList.add("error");
  } else {
    mensajeAsunto.innerHTML = "";
    inputAsunto.classList.add("input-correcto");
  }

  // MOTIVO (el select)
  let inputMotivo = document.querySelector("#motivo");
  let motivo = inputMotivo.value;
  let mensajeMotivo = document.querySelector("#mensajeMotivo");

  if (motivo === "") {
    mensajeMotivo.innerHTML = "Seleccioná un motivo";
    mensajeMotivo.classList.add("error");
  } else {
    mensajeMotivo.innerHTML = "";
    inputMotivo.classList.add("input-correcto");
  }

  // MENSAJE (el textarea)
  let inputMensaje = document.querySelector("#mensaje");
  let mensaje = document.querySelector("#mensaje").value;
  let mensajeMensaje = document.querySelector("#mensajeMensaje");

  if (mensaje === "") {
    mensajeMensaje.innerHTML = "Este campo es obligatorio";
    mensajeMensaje.classList.add("error");
  } else {
    mensajeMensaje.innerHTML = "";
    inputMensaje.classList.add("input-correcto");
  }
}

/Checkbox/
document.querySelector(".btn-suscribir").addEventListener("click", checkbox);

function checkbox() {
  let checkbox = document.querySelector("#inpCheckbox");
  let mensajeCheckbox = document.querySelector("#mensajeCheckbox");

  // si no está tildado, muestro error
  if (!checkbox.checked) {
    mensajeCheckbox.innerHTML = "Debés aceptar los términos y condiciones";
    mensajeCheckbox.classList.add("error");
  } else {
    mensajeCheckbox.innerHTML = "";
  }
}