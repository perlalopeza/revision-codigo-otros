const formulario = document.querySelector("form"); // se quitó el # de la llamda al form --- se añade punto y coma como buena practica.

formulario.onsubmit = function(e) {

  e.preventDefault(); //se agregó el Default

  //se cambio la declaración de las variables de var a const
  const n = formulario.elements[0]
  const  age = formulario.elements[1] //cambie el nombre de la variable porque se estaba tomando como reasignación.
  const  na = formulario.elements[2]

  const  nombre = n.value
  const  edad = age.value

  const  i = na.selectedIndex
  const  nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)


  if (nombre.length === 0) {
    n.classList.add("error")
  }

  const edadNumero = parseInt(edad); //La edad se está recibiendo originalmente como un string para hacer el rango correcto se convierte a numero.
  if (edadNumero < 18 || edadNumero > 120) {
    age.classList.add("error")
  }

if (nombre.length > 0 
  && (edadNumero > 18 
    && edadNumero < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}


//Estan siendo declaradas dentro y fuera de la función agregar invitado y con los mismos contextos
/* const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */ 


function agregarInvitado(nombre, edad, nacionalidad) {
  let nacionalidadCompleta = nacionalidad; // se agregó esta variable para mayor claridad.
  if (nacionalidad === "ar") {
    nacionalidadCompleta = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidadCompleta = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidadCompleta = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidadCompleta = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados");

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //estaba como added es solo add
lista.appendChild(elementoLista)

/* const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
//this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}
