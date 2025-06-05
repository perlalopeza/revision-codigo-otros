// Se añaden ; por buena práctica
// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.png"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.png"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.png"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.png"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.png"}
];

const li = document.getElementById("lista-de-productos"); // Se cambio a getElementById
const $i = document.querySelector('input'); //se quitó el punto, input no es una clase

const displayProductos = (lista) =>{ //se encapsulo el ciclo dentro de una función ya que esta estaba siendo llamada pero no existía.

    li.innerHTML = ''; // limpia antes de mostrar
    //se cambió el ciclo for por un forEach para mayor claridad en el código.
  lista.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  });


};

displayProductos(productos);



const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  
    const texto = $i.value.trim().toLowerCase();
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);

};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};

//Solo se agrega para que igual funcione al presionar enter
$i.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    const texto = $i.value.trim().toLowerCase();
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);
  }
});